
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
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { themeColor, bodyColor, textColor } from '../helper/AppHelper';
import { Icon } from 'native-base';



export default function DrawerContent(props){
    return(
        <View style={styles.DrawerContent}>
            <DrawerContentScrollView {...props}>
                <View styles={styles.topPart}>
                    <View style={{alignItems:'center'}}>
                        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
                    </View>
                    <View style={{padding:0, marginTop:15}}>
                        {/* <Text style={{fontSize:14, color:textColor, paddingLeft:17, fontSize:16}}>
                            <Icon color={'red'} size={16} name={'heart-outline'} />  App Language
                        </Text> */}
                        
                        {/* Drawer item list */}
                        <DrawerItemList {...props}
                            labelStyle={{color: textColor, fontSize:15}}
                        />
                        
                        <Text style={{marginTop:10, marginBottom:-10, borderTopWidth:1, borderTopColor: themeColor }}></Text>

                        <DrawerItem
                            label="Movies"
                            icon={({ focused, color, size }) => <Icon name={'film'} style={{fontSize:18, color:textColor}} />}
                            labelStyle={{color:textColor, fontSize:16, marginLeft:-15}}
                            onPress={()=>navigation.navigate('list')}
                        />
                        <DrawerItem
                            label="Category"
                            icon={({ focused, color, size }) => <Icon name={'pricetag'} style={{fontSize:18, color:textColor}} />}
                            labelStyle={{color:textColor, fontSize:16, marginLeft:-15}}
                            onPress={()=>navigation.navigate('category')}
                        />

                        <DrawerItem
                            label="Search"
                            icon={({ focused, color, size }) => <Icon name={'search'} style={{fontSize:18, color:textColor}} />}
                            labelStyle={{color:textColor, fontSize:16, marginLeft:-15}}
                            onPress={()=>navigation.navigate('search')}
                        />

                        <Text style={{marginTop:10, marginBottom:-10, borderTopWidth:1, borderTopColor: themeColor }}></Text>

                        <DrawerItem
                            label="Web Series"
                            icon={({ focused, color, size }) => <Icon name={'ios-film-outline'} style={{fontSize:18, color:textColor}} />}
                            labelStyle={{color:textColor, fontSize:16, marginLeft:-15}}
                            onPress={()=>navigation.navigate('list')}
                        />
                        <DrawerItem
                            label="Category"
                            icon={({ focused, color, size }) => <Icon name={'pricetag'} style={{fontSize:18, color:textColor}} />}
                            labelStyle={{color:textColor, fontSize:16, marginLeft:-15}}
                            onPress={()=>navigation.navigate('category')}
                        />

                        <DrawerItem
                            label="Search"
                            icon={({ focused, color, size }) => <Icon name={'search'} style={{fontSize:18, color:textColor}} />}
                            labelStyle={{color:textColor, fontSize:16, marginLeft:-15}}
                            onPress={()=>navigation.navigate('search')}
                        />

                        <Text style={{marginTop:10, marginBottom:-10, borderTopWidth:1, borderTopColor: themeColor }}></Text>

                        <DrawerItem
                            label="TV Series"
                            icon={({ focused, color, size }) => <Icon name={'tv-outline'} style={{fontSize:18, color:textColor}} />}
                            labelStyle={{color:textColor, fontSize:16, marginLeft:-15}}
                            onPress={()=>navigation.navigate('list')}
                        />
                        <DrawerItem
                            label="Category"
                            icon={({ focused, color, size }) => <Icon name={'pricetag'} style={{fontSize:18, color:textColor}} />}
                            labelStyle={{color:textColor, fontSize:16, marginLeft:-15}}
                            onPress={()=>navigation.navigate('category')}
                        />

                        <DrawerItem
                            label="Search"
                            icon={({ focused, color, size }) => <Icon name={'search'} style={{fontSize:18, color:textColor}} />}
                            labelStyle={{color:textColor, fontSize:16, marginLeft:-15}}
                            onPress={()=>navigation.navigate('search')}
                        />
                        


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
        width:80,
        height: 80,
        marginTop:10,
        borderRadius:50
    }
});