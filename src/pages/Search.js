import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Image,
  } from 'react-native';
import { Container, Header, View, Title, Content, Button, Left, Right, Body, Icon, Text, Input, Item } from 'native-base';
import {appTitle, themeColor, bodyColor, iconColor, textColor, linkColor, commonStyle, deviceWidth, playVideo} from './../helper/AppHelper'

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

export default class Search extends Component {

  render() {
    return (
      <Container>

        <Header searchBar rounded androidStatusBarColor={themeColor} style={{backgroundColor:themeColor}}>
          <Item style={{backgroundColor:themeColor, color: textColor}}>
            <Icon style={{color: textColor}} name="arrow-back" />
            <Input 
              style={{color:textColor, fontSize:14}}
              placeholder="Movies, TV-Series, Web Series"
                placeholderTextColor={'silver'}
                autoFocus={true}
            />
            <Icon style={{color: textColor}}fdsfsd name="close" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content style={commonStyle.bodyContent}>

          {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', paddingTop:'60%'}}>
            <Text style={{color:textColor, fontSize:20}}>No data found</Text>
          </View> */}

          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', paddingTop:'50%'}}>
            <Text>
                <Icon style={{color:textColor, fontSize:35, transform: [{rotateY: '360deg'}]}} type="Fontisto" name={'spinner'} />
                {/* <Image style={{}} source={require('../assets/img/logo.jpg')} /> */}
            </Text>
          </View>


          {/* <View style={{paddingLeft:15, paddingRight:15, marginTop:-5, paddingBottom:15}}>
              <Text style={{color:textColor}}>Search result for : 
                <Text style={{color:textColor, fontStyle:"italic"}}> fjsdfj</Text>
              </Text>
            </View>

            <SafeAreaView style={styles.itemContainer}>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[0].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[1].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[2].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[0].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[1].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[2].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[0].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[1].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[2].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[0].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[1].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[2].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[0].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[1].image}}
                    />
                </View>

            </SafeAreaView>


            <View style={{height:20}}></View> */}
        </Content>
      </Container>
    );
  }
}


let itemWidth = (deviceWidth/100)*47.5;
let itemHeight = (itemWidth*0.53);

const styles = StyleSheet.create({
    mainPageHeader:{
        backgroundColor: themeColor,
    },
    menuIcon:{
        color: iconColor
    },
    bodyContent:{
        flex:1,
        backgroundColor:"#16202a",
    },
    headerTitle:{
        textAlign:"center"
    },
    itemContainer: {
        padding:10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        paddingTop:-10

      },
    item: {
        height:itemHeight+20,
        width: '50%',
        padding:5,
        paddingTop:0,
        paddingBottom:20
    },
    itemImg:{
        alignSelf: 'center',
        height:'100%', 
        width:'100%',
        borderRadius:5,
    }

  });