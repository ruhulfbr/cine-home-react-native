import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Image,
  } from 'react-native';
import { Container, Header, View, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {appTitle, themeColor, bodyColor, iconColor, textColor, linkColor, commonStyle, deviceWidth, playVideo} from './../helper/AppHelper'
import { List } from 'react-native-paper';

export default class Category extends Component {
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
                <Title style={styles.headerTitle}>Categories</Title>
            </Body>

            <Right>
                <Button transparent>
                <Icon style={styles.menuIcon} name='menu' />
                </Button>
            </Right>
        </Header>
        <Content style={commonStyle.bodyContent}>

            <SafeAreaView style={{paddingLeft:15, paddingRight:15}}>
                <List.Accordion
                    style={styles.categoryList}
                    title="Hollwood"
                    titleStyle={styles.pCategory}
                >
                    <List.Item titleStyle={styles.subCat} title="First item" />
                    <List.Item titleStyle={styles.subCat} title="First item" />
                </List.Accordion>

                <List.Accordion
                    style={styles.categoryList}
                    title="Uncontrolled Accordion"
                    titleStyle={styles.pCategory}
                >
                    <List.Item titleStyle={styles.subCat} title="First item" />
                    <List.Item titleStyle={styles.subCat} title="First item" />
                </List.Accordion>

                <List.Accordion
                    style={styles.categoryList}
                    title="Uncontrolled Accordion"
                    titleStyle={styles.pCategory}
                >
                    <List.Item titleStyle={styles.subCat} title="First item" />
                    <List.Item titleStyle={styles.subCat} title="First item" />
                </List.Accordion>

                <List.Accordion
                    style={styles.categoryList}
                    title="Uncontrolled Accordion"
                    titleStyle={styles.pCategory}
                >
                    <List.Item titleStyle={styles.subCat} title="First item" />
                    <List.Item titleStyle={styles.subCat} title="First item" />
                </List.Accordion>

                <List.Accordion
                    style={styles.categoryList}
                    title="Uncontrolled Accordion"
                    titleStyle={styles.pCategory}
                >
                    <List.Item titleStyle={styles.subCat} title="First item" />
                    <List.Item titleStyle={styles.subCat} title="First item" />
                </List.Accordion>

                <List.Accordion
                    style={styles.categoryList}
                    title="Uncontrolled Accordion"
                    titleStyle={styles.pCategory}
                >
                    <List.Item titleStyle={styles.subCat} title="First item" />
                    <List.Item titleStyle={styles.subCat} title="First item" />
                </List.Accordion>

                <List.Accordion
                    style={styles.categoryList}
                    title="Uncontrolled Accordion"
                    titleStyle={styles.pCategory}
                >
                    <List.Item titleStyle={styles.subCat} title="First item" />
                    <List.Item titleStyle={styles.subCat} title="First item" />
                </List.Accordion>

                <List.Accordion
                    style={styles.categoryList}
                    title="Uncontrolled Accordion"
                    titleStyle={styles.pCategory}
                >
                    <List.Item titleStyle={styles.subCat} title="First item" />
                    <List.Item titleStyle={styles.subCat} title="First item" />
                </List.Accordion>

                <List.Accordion
                    style={styles.categoryList}
                    title="Uncontrolled Accordion"
                    titleStyle={styles.pCategory}
                >
                    <List.Item titleStyle={styles.subCat} title="First item" />
                    <List.Item titleStyle={styles.subCat} title="First item" />
                </List.Accordion>

                <List.Accordion
                    style={styles.categoryList}
                    title="Uncontrolled Accordion"
                    titleStyle={styles.pCategory}
                >
                    <List.Item titleStyle={styles.subCat} title="First item" />
                    <List.Item titleStyle={styles.subCat} title="First item" />
                </List.Accordion>

            </SafeAreaView>

         


          
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
    categoryList:{
        paddingLeft:15,
        paddingRight:15,
        backgroundColor: themeColor,
        padding:8,
        color:textColor
    }
    ,
    subCat:{
       paddingLeft:20, color:'silver', fontSize:14
    },
    pCategory:{
        color:'silver',fontSize:14
    }

  });