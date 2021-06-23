import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Image,
  } from 'react-native';
import { Container, Header, View, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
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

class ListPage extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header style={styles.mainPageHeader} androidStatusBarColor={themeColor}>
            <Left>
                <Button transparent onPress={()=>navigation.goBack()}>
                <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title style={styles.headerTitle}>{appTitle+' - List Page'}</Title>
            </Body>

            <Right>
                <Button transparent>
                <Icon style={styles.menuIcon} name='menu' />
                </Button>
            </Right>
        </Header>
        <Content style={commonStyle.bodyContent}>

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


            <View style={{height:20}}></View>
        </Content>
      </Container>
    );
  }
}

export default ListPage


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