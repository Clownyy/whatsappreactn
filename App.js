import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Container, Header, Content, Tab, Tabs, TabHeading, Icon, Text, List, Button, ListItem, Thumbnail, Body, Left, Right } from 'native-base';
// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"#075E54"}}>
          <Left>
            <Text style={{fontSize:20, color:"white"}}>
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
          <Tab heading={<TabHeading style={{backgroundColor: "#075E54"}}><Icon style={{color:"white"}} name="camera"/></TabHeading>}>
            
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: "#075E54"}}><Text style={{color:"white"}}>CHATS</Text></TabHeading>}>
          <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail style={{borderRadius:50}} square source={{ uri: 'https://yt3.ggpht.com/a/AGF-l782nkrjAbGCr44plhks1K_Cy2i9CFU1QIMB9A=s288-c-k-c0xffffffff-no-rj-mo' }} />
              </Left>
              <Body>
                <Text>Indri Sherlyana</Text>
                <Text note numberOfLines={1}>Hai!</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{fontSize:10, color:"black"}}>11.00 AM</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail style={{borderRadius:50}} square source={{ uri: 'https://yt3.ggpht.com/a/AGF-l782nkrjAbGCr44plhks1K_Cy2i9CFU1QIMB9A=s288-c-k-c0xffffffff-no-rj-mo' }} />
              </Left>
              <Body>
                <Text>Indri Sherlyana</Text>
                <Text note numberOfLines={1}>Hai!</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{fontSize:10, color:"black"}}>11.00 AM</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail style={{borderRadius:50}} square source={{ uri: 'https://yt3.ggpht.com/a/AGF-l782nkrjAbGCr44plhks1K_Cy2i9CFU1QIMB9A=s288-c-k-c0xffffffff-no-rj-mo' }} />
              </Left>
              <Body>
                <Text>Indri Sherlyana</Text>
                <Text note numberOfLines={1}>Hai!</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{fontSize:10, color:"black"}}>11.00 AM</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail style={{borderRadius:50}} square source={{ uri: 'https://yt3.ggpht.com/a/AGF-l782nkrjAbGCr44plhks1K_Cy2i9CFU1QIMB9A=s288-c-k-c0xffffffff-no-rj-mo' }} />
              </Left>
              <Body>
                <Text>Indri Sherlyana</Text>
                <Text note numberOfLines={1}>Hai!</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{fontSize:10, color:"black"}}>11.00 AM</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: "#075E54"}}><Text style={{color:"white"}}>STATUS</Text></TabHeading>}>
            
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: "#075E54"}}><Text style={{color:"white"}}>CALLS</Text></TabHeading>}>
            
          </Tab>
        </Tabs>
      </Container>
    );
  }
}