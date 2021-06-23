import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    SafeAreaView,
    Dimensions, Linking, Platform
  } from 'react-native';

import SendIntentAndroid from "react-native-send-intent";

  export let appTitle = "Cine Time";
  export let themeColor = "#1c2939";
  export let bodyColor = "#16202a";
  export let iconColor = '#dadde6';
  export let textColor = '#d4dbe3';
  export let linkColor = '#408ddf';
  export let deviceWidth = Dimensions.get('window').width;
  export let deviceHeight = Dimensions.get('window').height;

  export const commonStyle = StyleSheet.create({
     bodyContent:{
        flex:1,
        backgroundColor:"#16202a",
        //paddingLeft:15,
       // paddingRight:15,
        paddingTop:20,
     }
  });

  export function playVideo(url){
   var fn = Platform.select({
       android(){
           SendIntentAndroid.openAppWithData(
               /* "org.videolan.vlc" */null,
               url,
               "video/*"
           ).then(wasOpened => {});
       },
       default(){
           Linking.openURL(url).catch(err => {});
       }
   });
   fn();
}


