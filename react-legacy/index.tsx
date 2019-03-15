import {newBrowserClient} from '@appknobs/client'
import {AppknobsClient} from '@appknobs/react'
import {Appknobs, Feature} from '@appknobs/react/lib/legacy'
import * as React from 'react'
import * as ReactDom from 'react-dom'
// @ts-ignore
import {apiKey, appId, featureName, payload} from '../config'

class Content extends React.Component {
  public render() {
    return (
      <div>
        <div className='jumbotron mt-3'>
          <h1>React 15+ legacy support</h1>
          <p>{`React version: ${React.version}`}</p>
          <p>{`React DOM version: ${ReactDom.version}`}</p>
        </div>

        <h3>Feature: "{featureName}"</h3>
        <p>Is the feature enabled?</p>

        <Feature
          name={featureName}
          render={(enabled) =>
            enabled ? (
              <div className='alert alert-success' role='alert'>
                {featureName} is visible - render props
              </div>
            ) : (
              <div className='alert alert-warning' role='alert'>
                {featureName} is not enabled - render props
              </div>
            )
          }
        />

        <Feature name={featureName}>
          <div className='alert alert-success' role='alert'>
            {featureName} is enabled - child node
          </div>
        </Feature>
      </div>
    )
  }
}

interface State {
  client: AppknobsClient
  payload: any
}

// tslint:disable-next-line:max-classes-per-file
class App extends React.Component<{}, State> {
  constructor(props) {
    super(props)

    this.state = {
      client: null,
      payload: {},
    }
  }

  public componentDidMount() {
    const client = newBrowserClient({
      apiKey,
      appId,
    })

    this.setState({
      client,
      payload,
    })
  }

  public render() {
    return (
      <Appknobs client={this.state.client} payload={this.state.payload}>
        <Content />
      </Appknobs>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
