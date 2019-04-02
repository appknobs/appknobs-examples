import {newBrowserClient} from '@appknobs/client/lib/newBrowserClient'
import {newNodeClient} from '@appknobs/client/lib/newNodeClient'
import {Appknobs, Feature} from '@appknobs/react'
import Head from 'next/head'
import * as React from 'react'
import {apiKey, appId, featureName, payload} from '../../config'
import {Disabled} from '../components/Disabled'
import {Example} from '../components/Example'

const styles = {
  textarea: {
    backgroundColor: '#efefef',
    border: '1px solid gray',
    height: 50,
    padding: 10,
    width: 300,
  },
}

interface Props {
  features: {
    [key: string]: boolean,
  }
}

interface State {
  client: any
  payload: {
    [key: string]: any,
  }
}

class IndexPage extends React.Component<Props, State> {
  public static async getInitialProps() {
    const client = newNodeClient({appId, apiKey})

    const {features} = await client.evaluate(payload)

    return {features}
  }

  constructor(props) {
    super(props)

    this.state = {
      client: null,
      payload,
    }
  }

  public componentDidMount() {
    this.setState({client: newBrowserClient({appId, apiKey}), payload})
  }

  public onPayloadChange = (event) => {
    try {
      const newPayload = JSON.parse(event.target.value)
      this.setState({payload: newPayload})

      this.state.client.evaluate(newPayload).catch(() => {
        //
      })
    } catch (jsonParseError) {
      //
    }
  }

  public evaluatePayload = () => {
    this.state.client.evaluate(this.state.payload)
  }

  public render() {
    return (
      <>
        <Head>
          <title>Appknobs Next.js example</title>
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          />
        </Head>
        <div className='container'>
          <Appknobs features={this.props.features} client={this.state.client}>
            <div className='jumbotron mt-3'>
              <Feature
                name={featureName}
                render={(enabled) =>
                  enabled ? (
                    <Example name={featureName} />
                  ) : (
                    <Disabled name={featureName} />
                  )
                }
              />
            </div>
          </Appknobs>
          <hr />
          <div>
            <p>Edit payload:</p>
            <textarea
              style={styles.textarea}
              value={JSON.stringify(this.state.payload)}
              onChange={this.onPayloadChange}
            />
            <div>
              <button type="button" className="btn btn-primary" onClick={this.evaluatePayload}>Send</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default IndexPage
