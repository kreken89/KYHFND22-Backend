const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

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

  Menu.setApplicationMenu(null)

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit()
})