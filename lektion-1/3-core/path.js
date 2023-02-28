const path = require('path');

// console.log(__dirname)
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))

// Absolut sökväg = hela vägen från Root mappen på datorn
const pathName = path.join(__dirname, 'mapp', 'index.html')

// Relativ sökväg = relativ från där filen ligger
// ./mapp/index.html

console.log(pathName)