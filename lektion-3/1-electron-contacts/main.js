const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

const DB_CONNECTION = path.join(__dirname, 'local_db.json');


let mainWindow = null;
// skapar och talar om hur vårat "main window" ska se ut
const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    title: 'Contact List',
  })

  mainWindow.loadFile('src/index.html')
}


// väntar på att applikationen startar innan fönstret skapas och vi laddar in våran "hemsida"
// går att jämföra med DOMContentLoaded
app.whenReady().then(() => {
  createMainWindow()

  // Menu.setApplicationMenu(null)

  // Om vi skulle stängt ner föntrena men inte stängt av applikationen
  // säkerställer att vi bara har ETT fönster
  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})


// darwin = macOs
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit()
})





// ipcMain.handle gör båda dessa saker
// ipcMain.on('getAll')
// ipcMain.emit('getAll')
ipcMain.handle('getAll', () => {
  const contacts = fs.readFileSync(DB_CONNECTION, 'utf-8')
  return contacts // emittar tillbaka contacts
})

ipcMain.handle('addContact', (_, contact) => {
  // hämtar alla kontakter och konverterar om till JS array
  const contacts = JSON.parse(fs.readFileSync(DB_CONNECTION, 'utf-8'))
  contacts.push(contact)

// Skriver över hela filen med den manipulerade contacts
  fs.writeFileSync(DB_CONNECTION, JSON.stringify(contacts))
  return contact
})

ipcMain.handle('deleteContact', (_, id) => {
  // hämtar alla kontakter och konverterar om till JS array
  const contacts = JSON.parse(fs.readFileSync(DB_CONNECTION, 'utf-8'))

  // hittar index platsen på den kontakten som vi har klickat på och tar bort den med .splice
  const index = contacts.findIndex(contact => contact.id === id)
  contacts.splice(index, 1)

  // Skriver över hela filen med den manipulerade contacts
  fs.writeFileSync(DB_CONNECTION, JSON.stringify(contacts))

  return true
})

ipcMain.handle('getById', (_, id) => {
   // hämtar alla kontakter och konverterar om till JS array
  const contacts = JSON.parse(fs.readFileSync(DB_CONNECTION, 'utf-8'))

  // letar rätt på den enskilda kontakten med hjälp av id
  const contact = contacts.find(c => c.id === id)
  return contact
})


// tbd ipcMain.handle som hanterar att uppdatera en kontakt.
/*
 Här behöver vi ladda in alla kontakter,
 hämta den aktuella kontakten med hjälp av id på den vi skickade med
 uppdatera alla fölt
 skriva över alla kontakter i filen
 */