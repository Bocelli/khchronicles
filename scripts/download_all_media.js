const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_DIR = path.join(__dirname, '..');
const TIMELINE_DIR = path.join(BASE_DIR, 'images', 'timeline');
const CHAR_DIR = path.join(BASE_DIR, 'images', 'characters');

if (!fs.existsSync(TIMELINE_DIR)) fs.mkdirSync(TIMELINE_DIR, { recursive: true });
if (!fs.existsSync(CHAR_DIR)) fs.mkdirSync(CHAR_DIR, { recursive: true });

const timelineFiles = {
  "era-1-fairy-tales": "File:Promotional Art 01 KHX.png",
  "era-2-union-cross": "File:Promotional Art 01 KHUX.png",
  "era-3-dark-road": "File:Key Art KHDR.png",
  "era-4-birth-by-sleep": "File:Promotional Art 01 KHBBS.png",
  "era-5-fragmentary-passage": "File:Promotional Art 01 KHHDFCP.png",
  "era-6-kingdom-hearts-1": "File:Promotional Art 01 KH.png",
  "era-7-chain-of-memories": "File:Promotional Art 01 KHC.png",
  "era-8-days": "File:Promotional Art 01 KHD.png",
  "era-9-kingdom-hearts-2": "File:Promotional Art 01 KHII.png",
  "era-10-recoded": "File:Promotional Art 01 KHREC.png",
  "era-11-dream-drop-distance": "File:Promotional Art 03 KH3D.png",
  "era-12-kingdom-hearts-3": "File:Promotional Art 01 KHIII.png",
  "era-13-melody-of-memory": "File:Promotional Art 01 KHMOM.png",
  "era-14-future-kh4": "File:20th Anniversary artwork KHIV.png"
};

const characterFiles = {
  "sora": "File:Sora KHIII.png",
  "riku": "File:Riku KHIII.png",
  "kairi": "File:Kairi KHIII.png",
  "roxas": "File:Roxas KHIII.png",
  "axel": "File:Lea KHIII.png",
  "xion": "File:Xion KHIII.png",
  "terra": "File:Terra KHIII.png",
  "aqua": "File:Aqua KHIII.png",
  "ventus": "File:Ventus KHIII.png",
  "master-eraqus": "File:Master Eraqus KHIII.png",
  "master-xehanort": "File:Master Xehanort KHIII.png",
  "young-xehanort": "File:Young Xehanort KHIII.png",
  "ansem-seeker": "File:Ansem, Seeker of Darkness KHIII.png",
  "xemnas": "File:Xemnas KHIII.png",
  "vanitas": "File:Vanitas (Unmasked Render) KHBBS.png",
  "namine": "File:Naminé KHIII.png",
  "ansem-wise": "File:Ansem the Wise KHIII.png",
  "mickey": "File:Mickey Mouse KHBBS.png",
  "donald": "File:Donald Duck KHBBS.png",
  "goofy": "File:Goofy KHBBS.png",
  "yen-sid": "File:Yen Sid KHBBS.png",
  "maleficent": "File:Maleficent KHIII.png",
  "pete": "File:Pete KHIII.png",
  "saix": "File:Saïx KHIII.png",
  "demyx": "File:Demyx KHIII.png",
  "luxord": "File:Luxord KHIII.png",
  "marluxia": "File:Marluxia KHIII.png",
  "larxene": "File:Larxene KHIII.png",
  "vexen": "File:Vexen KHIII.png",
  "lexaeus": "File:Aeleus KHIII.png",
  "zexion": "File:Ienzo KHIII.png",
  "xaldin": "File:Dilan KHIII.png",
  "master-of-masters": "File:Master of Masters KHXBC.png",
  "luxu-xigbar": "File:Xigbar KHIII.png",
  "ira": "File:Ira KHMOM.png",
  "invi": "File:Invi KHMOM.png",
  "aced": "File:Aced KHMOM.png",
  "gula": "File:Gula KHMOM.png",
  "ava": "File:Ava KHMOM.png",
  "ephemer": "File:Ephemer KHIII.png",
  "skuld": "File:Skuld KHX.png",
  "brain": "File:Brain KHUX.png",
  "strelitzia": "File:Strelitzia KHUX.png",
  "yozora": "File:Yozora KHIIIRM.png",
  "chirithy": "File:Chirithy KHIII.png"
};

async function fetchWikiUrls(titles) {
  const urlMap = {};
  // Split in chunks of 20
  for (let i = 0; i < titles.length; i += 20) {
    const chunk = titles.slice(i, i + 20);
    const apiUrl = `https://www.khwiki.com/api.php?action=query&titles=${encodeURIComponent(chunk.join('|'))}&prop=imageinfo&iiprop=url&format=json`;
    const res = await fetch(apiUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    const data = await res.json();
    if (data.query && data.query.pages) {
      for (const p of Object.values(data.query.pages)) {
        if (p.imageinfo && p.imageinfo[0]) {
          urlMap[p.title] = p.imageinfo[0].url;
        }
      }
    }
  }
  return urlMap;
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const stream = fs.createWriteStream(destPath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Resolving Timeline Artworks...');
  const tTitles = Object.values(timelineFiles);
  const tUrls = await fetchWikiUrls(tTitles);

  for (const [key, title] of Object.entries(timelineFiles)) {
    const rawUrl = tUrls[title];
    if (rawUrl) {
      const dest = path.join(TIMELINE_DIR, `${key}.png`);
      try {
        await downloadFile(rawUrl, dest);
        console.log(`[Timeline] Downloaded: ${key}.png`);
      } catch (e) {
        console.error(`[Timeline Error] ${key}:`, e.message);
      }
    } else {
      console.warn(`[Timeline Warn] No URL for: ${title}`);
    }
  }

  console.log('\nResolving Character Renders...');
  const cTitles = Object.values(characterFiles);
  const cUrls = await fetchWikiUrls(cTitles);

  for (const [slug, title] of Object.entries(characterFiles)) {
    const rawUrl = cUrls[title];
    if (rawUrl) {
      const dest = path.join(CHAR_DIR, `${slug}.png`);
      try {
        await downloadFile(rawUrl, dest);
        console.log(`[Char] Downloaded: ${slug}.png`);
      } catch (e) {
        console.error(`[Char Error] ${slug}:`, e.message);
      }
    } else {
      console.warn(`[Char Warn] No URL for: ${title}`);
    }
  }

  console.log('\nAll downloads complete!');
}

run();
