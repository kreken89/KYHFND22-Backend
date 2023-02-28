//File System
const fs = require('fs');

// Läsa filer

// fs.readFile('./mapp/text.txt', 'utf8', (err, data) => {
//   if(err) {
//     console.log(err)
//     return
//   }

//   // console.log(data.toString())
//   console.log(data)
// })

// const data = fs.readFileSync('./mapp/text.txt', 'utf8')
// console.log(data)

// console.log('det här ligger efter read file')



// Skriva till filer
// fs.writeFile('./mapp/text.txt', 'Ny text', (err) => {
//   if(err) {
//     console.log(err)
//     return
//   }

//   console.log('skrev till filen')
// })

// Lägga till i slutet på en fil
// fs.appendFile('./mapp/text.txt', '\n Det här är text som vi har lagt till.', () => {
//   console.log('appended text')
// })

// Skapa en ny fil
// fs.writeFile('./mapp/text3.txt', 'Det här blir en ny fil', (err) => {
//   if(err) {
//     console.log(err)
//     return
//   }

//   console.log('skrev till filen')
// })


// Döpa om en fil
// fs.rename('./mapp/text3.txt', './text2.txt', (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }

//   console.log('bytte namn på filen')
// })



// Mappar

//Kolla om en fil/mapp existerar
// if(!fs.existsSync('./NyMapp')) {

//   //Skapa en ny mapp
//   fs.mkdir('./NyMapp', (err) => {
//     if(err) {
//       console.log(err)
//       return
//     }
  
//     console.log('mapp skapad')
//   })

// } else {

//   // Ta bort en mapp
//   fs.rmdir('./NyMapp', (err) => {
//     if(err) {
//       console.log(err)
//       return
//     }
//     console.log('tog bort mappen')
//   })

// }


// Kolla om text2 filen finns
if(fs.existsSync('./mapp/text2.txt')) {
  // Ta bort en fil
  fs.unlink('./mapp/text2.txt', err => {
    if(err) {
      console.log(err)
      return
    }

    console.log('tog bort filen')
  })
}


const path = require('path')

const pathName = path.join(__dirname, 'mapp', 'text.txt')

fs.appendFile(pathName, '\nNu lägger jag till text igen...', () => {
  console.log('klart')
})
