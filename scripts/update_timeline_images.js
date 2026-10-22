const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'js', 'data', 'timeline-data.js');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/id:\s*"(era-[^"]+)",/g, (match, id) => {
  return `id: "${id}",\n    image: "images/timeline/${id}.png",`;
});

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated timeline-data.js with image properties!');
