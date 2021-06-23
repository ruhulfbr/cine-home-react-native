
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { themeColor, bodyColor, textColor } from '../helper/AppHelper';



export default function DrawerContent(props){
    return(
        <View style={styles.DrawerContent}>
            <DrawerContentScrollView {...props}>
                <View styles={styles.topPart}>
                    <View style={{alignItems:'center'}}>
                        <Image style={styles.logo} source={require('../assets/img/logo.jpg')} />
                    </View>
                    <View style={{padding:15, marginTop:15}}>
                        <Text style={{fontSize:14, color:textColor}}> App Language</Text>
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    DrawerContent:{
        backgroundColor: bodyColor,
        flex:1        
    },
    topPart:{
        flex:1,
        padding:50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width:100,
        height: 100,
        borderRadius:5
    }
});