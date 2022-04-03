const { app, BrowserWindow } = require('electron')

let mainWindow;

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('dist/atp-ref-grabber/index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}