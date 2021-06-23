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

class Details extends Component {

  render() {
    return (
      <Container>
        <Header style={styles.mainPageHeader} androidStatusBarColor={themeColor}>
            <Left>
                <Button transparent>
                <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title style={styles.headerTitle}>{appTitle+' - Details'}</Title>
            </Body>

            <Right>
                <Button transparent>
                <Icon style={styles.menuIcon} name='menu' />
                </Button>
            </Right>
        </Header>
        <Content style={styles.bodyContent}>
            <SafeAreaView style={styles.topBanner}>
                <Image style={styles.bannerImg} 
                    source={{uri: cards[0].image}}
                />
            </SafeAreaView>

            <View style={styles.sectionCardTitleSection}>
                <View style={styles.sectionCardTitles}>
                    <Text style={styles.detailsTitle}>Miraculous World: Shanghai - The Legend of Ladydragon (2021) 10809 BluRay</Text>
                </View>
            </View>

            <View style={styles.trailorSection}>
                <Button iconLeft info style={styles.trailorBtn}> 
                    <Icon style={styles.playIcon} name='play' />
                    <Text style={styles.trailorBtnTxt}>Trailor</Text>
                </Button>

                <Button rounded danger style={styles.watchBtn}>
                    <Icon style={styles.playIcon} name='play' />
                    <Text style={styles.trailorBtnTxt}>Watch</Text>
                </Button>

                <Button iconLeft success style={styles.downloadBtn}> 
                    <Icon style={styles.playIcon} name='download' />
                    <Text style={styles.trailorBtnTxt}>Download</Text>
                </Button>

            </View>

            <View style={styles.sectionCardTitleSection}>
                <View style={styles.contentDetailsInfo}>
                    <Text style={styles.contentDetailsInfoTxtPot}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    <Text style={styles.contentDetailsInfoTxt}>Language: English  </Text>
                    <Text style={styles.contentDetailsInfoTxt}>Genre: Action, Comedy, Thirriler, Romance  </Text>
                    <Text style={styles.contentDetailsInfoTxt}>Year: 2020 </Text>
                    <Text style={styles.contentDetailsInfoTxt}>Cast: Karthi, Rashmika Mandanna, Napolean, Karthi, Rashmika Mandanna, Napolean   </Text>
                    <Text style={styles.contentDetailsInfoTxt}>Director: Sanjay Lila bansali  </Text>
                    <Text style={styles.contentDetailsInfoTxt}>IMDB rating: 5.8  </Text>
                    
                </View>
            </View>

            <View style={styles.sectionCard}>
                <View style={styles.sectionCardTitles}>
                    <Text style={{color:textColor, flex:2}}>Recommends</Text>
                </View>
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
                        source={{uri: cards[1].image}}
                    />
                </View>  
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[1].image}}
                    />
                </View>
                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[1].image}}
                    />
                </View>   

                <View style={styles.item}>
                    <Image style={styles.itemImg} 
                        source={{uri: cards[1].image}}
                    />
                </View>           

            </SafeAreaView>
            
        </Content>
      </Container>
    );
  }
}

export default Details;


let itemWidth = (deviceWidth/100)*47.5;
let itemHeight = (itemWidth*0.53);

let bannerHeight = (deviceWidth*0.53);

const styles = StyleSheet.create({
    mainPageHeader:{
        backgroundColor: themeColor,
    },
    menuIcon:{
        color: iconColor
    },
    bodyContent:{
        flex:1,
        backgroundColor:"#16202a"
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
        paddingTop:0
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
    },
    topBanner:{
        height:bannerHeight-10,
        width: '100%',
        flex: 1,

    },
    bannerImg:{
        alignSelf: 'center',
        height:'100%', 
        width:'100%',
    },
    sectionCard:{
        flex:1,
        display:"flex",
        justifyContent:"space-between",
        paddingTop:20,
    },
    sectionCardTitles:{
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:20,
        flexDirection:"row",
    },
    sectionCardTitleSection:{
        flex:1,
        display:"flex",
        justifyContent:"space-between",
        paddingTop:10,
        paddingBottom:0,
    },
    detailsTitle:{
        color:textColor, flex:2, lineHeight:20, fontSize:14,textAlign:'justify'
    },
    trailorSection:{
        paddingLeft:15,
        paddingRight:15,
        flex:1,
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
    },
    trailorBtn:{
        height:30,
        width:90
    },
    watchBtn:{
        height:30,
        width:80
    },  
    downloadBtn:{
        height:30,
        width:110
    },
    playIcon:{
        fontSize:15,
        marginLeft:8,
        marginRight:-10
    },
    trailorBtnTxt:{
        fontSize:12
    },
    contentDetailsInfo:{
        paddingLeft:15,
        paddingRight:15,
    },
    contentDetailsInfoTxtPot:{
        color: textColor, flex:1, lineHeight:18, fontSize:12, marginBottom:30
    },
    contentDetailsInfoTxt:{
        color:'#4b5875', flex:1, lineHeight:12, fontSize:12, marginBottom:5
    },

  });