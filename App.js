import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Content, Tab, Tabs, Fab, TabHeading, Icon, Text, List, Button, ListItem, Thumbnail, Body, Left, Right } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header style={{ backgroundColor: "#075E54" }}>
          <Left>
            <Text style={{ fontSize: 20, color: "white" }}>
              WhatsApp
            </Text>
          </Left>
          <Right>
            <Button transparent>
              <Icon name="search"></Icon>
            </Button>
            <Button transparent>
              <Icon name="more"></Icon>
            </Button>
          </Right>

        </Header>
        <Tabs>
          <Tab heading={<TabHeading style={{ backgroundColor: "#075E54" }}><Icon style={{ color: "white" }} name="camera" /></TabHeading>}>

          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#075E54" }}><Text style={{ color: "white" }}>CHATS</Text></TabHeading>}>
            <Fab style={{backgroundColor: '#25d366'}}>
              <Icon name="chatboxes"></Icon>
            </Fab>
            <Content>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail style={{ borderRadius: 50 }} square source={{ uri: 'https://yt3.ggpht.com/a/AGF-l782nkrjAbGCr44plhks1K_Cy2i9CFU1QIMB9A=s288-c-k-c0xffffffff-no-rj-mo' }} />
                  </Left>
                  <Body>
                    <Text>Indri Sherlyana</Text>
                    <Text note numberOfLines={1}>Hai!</Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text style={{ fontSize: 10, color: "black" }}>11.00 AM</Text>
                    </Button>
                  </Right>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail style={{ borderRadius: 50 }} square source={{ uri: 'https://yt3.ggpht.com/a/AGF-l782nkrjAbGCr44plhks1K_Cy2i9CFU1QIMB9A=s288-c-k-c0xffffffff-no-rj-mo' }} />
                  </Left>
                  <Body>
                    <Text>Indri Sherlyana</Text>
                    <Text note numberOfLines={1}>Hai!</Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text style={{ fontSize: 10, color: "black" }}>11.00 AM</Text>
                    </Button>
                  </Right>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail style={{ borderRadius: 50 }} square source={{ uri: 'https://yt3.ggpht.com/a/AGF-l782nkrjAbGCr44plhks1K_Cy2i9CFU1QIMB9A=s288-c-k-c0xffffffff-no-rj-mo' }} />
                  </Left>
                  <Body>
                    <Text>Indri Sherlyana</Text>
                    <Text note numberOfLines={1}>Hai!</Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text style={{ fontSize: 10, color: "black" }}>11.00 AM</Text>
                    </Button>
                  </Right>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail style={{ borderRadius: 50 }} square source={{ uri: 'https://yt3.ggpht.com/a/AGF-l782nkrjAbGCr44plhks1K_Cy2i9CFU1QIMB9A=s288-c-k-c0xffffffff-no-rj-mo' }} />
                  </Left>
                  <Body>
                    <Text>Indri Sherlyana</Text>
                    <Text note numberOfLines={1}>Hai!</Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text style={{ fontSize: 10, color: "black" }}>11.00 AM</Text>
                    </Button>
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#075E54" }}><Text style={{ color: "white" }}>STATUS</Text></TabHeading>}>
            <Fab style={{backgroundColor: '#25d366'}}>
              <Icon name="camera"></Icon>
            </Fab>
            <Content>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail style={{borderRadius : 50 }} square source={{uri: 'http://www.wellspringinn.com/assets/img/profiles/user.png'}}></Thumbnail>
                  </Left>
                  <Body>
                    <Text>My Status</Text>
                    <Text note numberOfLines={1}>Tap to add status update</Text>
                  </Body>
                </ListItem>
                <ListItem itemDivider>
                  <Text note>Recent updates</Text>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail style={{borderRadius : 50 }} square source={{uri: 'https://scontent-cgk1-1.xx.fbcdn.net/v/t1.0-9/81513097_2429711790675796_5352325421788561408_n.jpg?_nc_cat=111&_nc_ohc=2ofqQKcX0FQAX-a49Tj&_nc_ht=scontent-cgk1-1.xx&oh=c4750103f5f42829536af54ce1d560f5&oe=5E924CFD'}}></Thumbnail>
                  </Left>
                  <Body>
                    <Text>Ci Devy</Text>
                    <Text note numberOfLines={1}>Yesterday, 20:25</Text>
                  </Body>
                </ListItem>
                <ListItem itemDivider>
                  <Text note>Viewed updates</Text>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail style={{borderRadius : 50 }} square source={{uri: 'https://scontent-cgk1-1.xx.fbcdn.net/v/t1.0-9/81513097_2429711790675796_5352325421788561408_n.jpg?_nc_cat=111&_nc_ohc=2ofqQKcX0FQAX-a49Tj&_nc_ht=scontent-cgk1-1.xx&oh=c4750103f5f42829536af54ce1d560f5&oe=5E924CFD'}}></Thumbnail>
                  </Left>
                  <Body>
                    <Text>Ci Angel</Text>
                    <Text note numberOfLines={1}>Yesterday, 20:25</Text>
                  </Body>
                </ListItem>
              </List>
            </Content>
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: "#075E54" }}><Text style={{ color: "white" }}>CALLS</Text></TabHeading>}>

          </Tab>
        </Tabs>
      </Container>
    );
  }
}
