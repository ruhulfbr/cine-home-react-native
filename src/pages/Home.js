import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Image,
    FlatList,
    Linking,
    Platform,
    TouchableHighlight,
    TouchableOpacity
  } from 'react-native';
import { Container, Header, View, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

import {appTitle, themeColor, bodyColor, iconColor, textColor, linkColor, commonStyle, deviceWidth, playVideo} from './../helper/AppHelper'
import Carousel from 'react-native-snap-carousel';


const cards = [
    {
      text: 'Slide One',
      name: 'One',
      image: 'http://showtimebd.com/kachajal/images/movies/Sreekaram_(2021)_WEBRip.jpg',
    },
    {
        text: 'Slide Two',
        name: 'Two',
        image:'http://showtimebd.com/kachajal/images/movies/Sultan_(2021)_CAMRip.jpg',
    },
    {
        text: 'Slide Four',
        name: 'Four',
        image:'http://showtimebd.com/kachajal/images/movies/Ninnila_Ninnila_(2021)_WEBRip.jpg',
    },
    {
        text: 'Slide Five',
        name: 'Five',
        image:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    }

];

class Home extends Component {

    constructor(props){
        super(props)
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={{height:200}}>
                <Image style={{ flex: 1, borderRadius:5 }} 
                    source={{uri: item.image}}
                />
            </View>
        );
    }
   
    _renderItem2 = ({item, index}) => {
        let width = (deviceWidth/100)*47.5;
        let height = (width*0.53);
        return (
            <View style={{height:height,width:width,paddingLeft:15}}>
                <Image style={{ flex: 1, borderRadius:5 }} 
                    source={{uri: item.image}}
                />
            </View>
        );
    }

    playSometing = () =>{
        alert(deviceWidth);
        let url = 'http://showtimebd.com/ftpdata/hindi/Tamil%20&%20Telegu/2016/Maalai%20Nerathu%20Mayakkam%20(2016)%20HDRip.mkv';
        //playVideo(url);
    }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Header style={styles.mainPageHeader} androidStatusBarColor={themeColor}>
          <Left>
            <Button transparent>
              <Icon onPress={()=>navigation.toggleDrawer()} style={styles.menuIcon} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.headerTitle}>{appTitle}</Title>
          </Body>

          <Right>
              <Icon style={styles.srachIcon} name='search' />
          </Right>
        </Header>
        <Content style={commonStyle.bodyContent}>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={cards}
              renderItem={this._renderItem}
              sliderWidth={deviceWidth}
              itemWidth={deviceWidth - 40}
              loop={true}
              loopClonesPerSide={3}
              autoplay= {true}
              autoplayDelay = {2500}
            />
            

            <View style={styles.sectionCard}>
                <View style={styles.sectionCardTitles}>
                    <Text style={{color:textColor, flex:2}}>Recommends</Text>

                    <TouchableOpacity onPress={()=>navigation.navigate('list')}>
                        {/* <Text style={{color:linkColor,flex:2,textAlign:'right',fontSize:13}} onPress={this.playSometing}>SEE MORE</Text> */}
                        <Text style={{color:linkColor,flex:2,textAlign:'right',fontSize:13}}>SEE MORE</Text>
                    </TouchableOpacity>
                    
                </View>
                <FlatList
                    style={styles.scrollView} 
                    horizontal={true}
                    data={cards}
                    renderItem={this._renderItem2}
                    keyExtractor={item => item.text}
                    animated={true}
                />
            </View>

            <View style={styles.sectionCard}>
                <View style={styles.sectionCardTitles}>
                    <Text style={{color:textColor, flex:2}}>New Realesed</Text>
                    <Text style={{color:linkColor,flex:2,textAlign:'right', fontSize:13}}>SEE MORE</Text>
                </View>
                <FlatList
                    style={styles.scrollView} 
                    horizontal={true}
                    data={cards}
                    renderItem={this._renderItem2}
                    keyExtractor={item => item.text}
                    animated={true}
                />
            </View>

            <View style={styles.sectionCard}>
                <View style={styles.sectionCardTitles}>
                    <Text style={{color:textColor, flex:2}}>New Realesed</Text>
                    <Text style={{color:linkColor,flex:2,textAlign:'right', fontSize:13}}>SEE MORE</Text>
                </View>
                <FlatList
                    style={styles.scrollView} 
                    horizontal={true}
                    data={cards}
                    renderItem={this._renderItem2}
                    keyExtractor={item => item.text}
                    animated={true}
                />
            </View>

            <View style={styles.sectionCard}>
                <View style={styles.sectionCardTitles}>
                    <Text style={{color:textColor, flex:2}}>New Realesed</Text>
                    <Text style={{color:linkColor,flex:2,textAlign:'right', fontSize:13}}>SEE MORE</Text>
                </View>
                <FlatList
                    style={styles.scrollView} 
                    horizontal={true}
                    data={cards}
                    renderItem={this._renderItem2}
                    keyExtractor={item => item.text}
                    animated={true}
                />
            </View>

            <View style={styles.sectionCard}>
                <View style={styles.sectionCardTitles}>
                    <Text style={{color:textColor, flex:2}}>New Realesed</Text>
                    <Text style={{color:linkColor,flex:2,textAlign:'right', fontSize:13}}>SEE MORE</Text>
                </View>
                <FlatList
                    style={styles.scrollView} 
                    horizontal={true}
                    data={cards}
                    renderItem={this._renderItem2}
                    keyExtractor={item => item.text}
                    animated={true}
                />
            </View>

            <View style={{height:20}}></View>



        </Content>
      </Container>
    );
  }
}

export default Home

const styles = StyleSheet.create({
    mainPageHeader:{
        backgroundColor: themeColor,
    },
    srachIcon:{
        color: iconColor,
        fontSize:20,
        paddingRight:10
    },
    menuIcon:{
        color: iconColor
    },
    bodyContent:{
        flex:1,
        backgroundColor:"#16202a",
        paddingLeft:15,
        paddingRight:15,
        paddingTop:20
    },
    headerTitle:{
        textAlign:"center"
    },
    sectionCard:{
        flex:1,
        height:170,
        display:"flex",
        justifyContent:"space-between",
        paddingTop:20,
        paddingBottom:5,
    },
    sectionCardTitles:{
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:20,
        flexDirection:"row",
    },
    scrollView: {
        flex:1,
        flexDirection:"row",
    },
  });