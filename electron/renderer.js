// newBrowserClient is required in the render process of Electron
const {newBrowserClient} = require('@appknobs/client/lib/newBrowserClient')
const {apiKey, appId, featureName, payload} = require('./config')

async function renderApp() {
  const client = newBrowserClient({apiKey, appId})
  const {features} = await client.evaluate(payload)

  document.querySelector('#features').innerText = JSON.stringify(features)
}

renderApp()
