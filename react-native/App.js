import React, {Component} from 'react'
import {Image, ActivityIndicator} from 'react-native'
import {Appknobs, Feature} from '@appknobs/react'
import {newRNClient as newClient} from '@appknobs/client'
import {apiKey, appId, featureName, payload} from './config'
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Form,
  H1,
  Header,
  Input,
  Item,
  Left,
  Right,
  Text,
  Title,
} from 'native-base'
import img1 from './images/01.jpg'
import img2 from './images/02.jpg'
import img3 from './images/03.jpg'
import img4 from './images/04.jpg'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      loggedin: false,
    }
  }

  componentDidMount() {
    this.appknobsClient = newClient({
      appId,
      apiKey,
    })
  }

  login = () => {
    setTimeout(() => {
      this.setState({loggedin: true, loading: false})
    }, 600)
    this.setState({loading: true})
  }

  logout = () => {
    setTimeout(() => {
      this.setState({loggedin: false, loading: false, username: ''})
    }, 400)
    this.setState({loading: true})
  }

  render() {
    return (
      <Appknobs
        client={this.appknobsClient}
        payload={{username: this.state.username}}
      >
        <Container>
          <Header>
            <Left />
            <Body>
              <Title style={{width: 200}}>Order My Coffee</Title>
            </Body>
            <Right>
              <Button hasText transparent onPress={this.logout}>
                {!this.state.loading &&
                  this.state.loggedin && <Text>Logout</Text>}
              </Button>
            </Right>
          </Header>
          <Content>
            {this.state.loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                style={{padding: 30}}
              />
            )}
            {!this.state.loading &&
              !this.state.loggedin && (
                <>
                  <H1 style={{padding: 20}}>Welcome</H1>
                  <Form>
                    <Item>
                      <Input
                        placeholder="Email"
                        spellCheck={false}
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={this.state.username}
                        onChangeText={(username) => this.setState({username})}
                      />
                    </Item>
                    <Item>
                      <Input
                        placeholder="Password"
                        secureTextEntry={true}
                        onSubmitEditing={this.login}
                      />
                    </Item>
                    <Button style={{margin: 20}} dark onPress={this.login}>
                      <Text>Log in</Text>
                    </Button>
                  </Form>
                  <Image
                    source={img4}
                    style={{height: 500, width: null, flex: 1}}
                  />
                </>
              )}

            {!this.state.loading &&
              this.state.loggedin && (
                <Feature name={featureName}>
                  <Card>
                    <CardItem header>
                      <Text>Rewards & Points</Text>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        source={img2}
                        style={{height: 200, width: null, flex: 1}}
                      />
                    </CardItem>
                    <CardItem footer>
                      <Text note>
                        This feature is managed and visible only for selected
                        users
                      </Text>
                    </CardItem>
                  </Card>
                </Feature>
              )}

            {!this.state.loading &&
              this.state.loggedin && (
                <Card>
                  <CardItem header>
                    <Text>Order your favourite coffee</Text>
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      source={img1}
                      style={{height: 200, width: null, flex: 1}}
                    />
                  </CardItem>
                  <CardItem footer>
                    <Text note>
                      This feature is unmanaged and visible to everyone
                    </Text>
                  </CardItem>
                </Card>
              )}
          </Content>
        </Container>
      </Appknobs>
    )
  }
}
