const {app, BrowserWindow} = require('electron')
// newElectronClient is required in the main process of Electron
const {newElectronClient} = require('@appknobs/client/lib/newElectronClient')
const {apiKey, appId, featureName, payload} = require('./config')

let mainWindow

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  // Create a new Appknobs client that works in Electron main process:
  const client = newElectronClient({apiKey, appId})
  // Fetch the features for this instance by passing the payload:
  const {features} = await client.evaluate(payload)

  const file = features[featureName]
    ? 'index-enabled.html'
    : 'index-disabled.html'

  mainWindow.loadFile(file)

  // To open dev tools:
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})
