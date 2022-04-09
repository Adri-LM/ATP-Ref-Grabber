const { app, BrowserWindow, ipcMain } = require('electron')
const Store = require("electron-store");
const axios = require("axios");

let mainWindow;

Store.initRenderer()

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})

function createWindow() {
  mainWindow = new BrowserWindow({
    title: "ATP Ref Grabber",
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  if (app.isPackaged) {
    mainWindow.loadFile('dist/atp-ref-grabber/index.html')
  } else {
    mainWindow.loadURL('http://localhost:4200/')
    mainWindow.webContents.openDevTools()
  }
}

ipcMain.handle("sendDeliveryModeRequest", async (event, ...args) => {
  const config = args[0];

  return (await axios.post(`${process.env.DS_BASE_URL}/available-to-promises`, config.body, {
      headers: {
        'x-bu-code': config.bu,
        'Adeo-Bu-Code': config.buCode,
        'X-Gateway-APIKey': process.env.DS_API_KEY
      }
    })
  )?.data;
});
