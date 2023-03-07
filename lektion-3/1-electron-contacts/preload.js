const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('contacts', {
  getAll: () => 'testing 123'
})