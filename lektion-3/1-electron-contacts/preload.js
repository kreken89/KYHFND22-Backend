const { contextBridge, ipcRenderer } = require('electron')

//  ipcRenderer.invoke gör båda dessa saker:
// ipcRenderer.emit('delete')
// ipcRenderer.on('delete-svar')

contextBridge.exposeInMainWorld('contacts', {
  getAll: () => ipcRenderer.invoke('getAll'),
  add: (contact) => ipcRenderer.invoke('addContact', contact),
  delete: (id) => ipcRenderer.invoke('deleteContact', id),
  getById: (id) => ipcRenderer.invoke('getById', id)
})



