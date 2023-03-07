const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

const DB_CONNECTION = path.join(__dirname, 'local_db.json');

let mainWindow = null;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    title: 'Contact List',
  })

  mainWindow.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createMainWindow()

  // Menu.setApplicationMenu(null)

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit()
})






ipcMain.handle('getAll', () => {
  const contacts = fs.readFileSync(DB_CONNECTION, 'utf-8')
  return contacts
})

ipcMain.handle('addContact', (_, contact) => {
  // hämtar alla kontakter och konverterar om till JS array
  const contacts = JSON.parse(fs.readFileSync(DB_CONNECTION, 'utf-8'))
  contacts.push(contact)

  fs.writeFileSync(DB_CONNECTION, JSON.stringify(contacts))
  return contact
})

ipcMain.handle('deleteContact', (_, id) => {
  
})