
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Icon, List } from 'native-base';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Home from './pages/Home'
import ListPage from './pages/ListPage'
import Details from './pages/Details'
import Search from './pages/Search'
import Category from './pages/Category'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { textColor, themeColor } from './helper/AppHelper';
import DrawerContent from './navigation/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const stackNav= () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Cine Time" component={Search} options={{headerShown:false}}/>
        <Stack.Screen name="list" component={ListPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
}

const App= () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>        
        <Drawer.Screen name="Home" component={stackNav} options={{ drawerIcon: (({focused}) => <Icon name="home" style={{color: textColor, marginRight:-15, fontSize:20}} />) }} />
        <Drawer.Screen name="Watch History" component={List} options={{ drawerIcon: (({focused}) => <Icon name="stopwatch-outline" style={{color: textColor, marginRight:-15, fontSize:20}} />) }} />
        <Drawer.Screen name="My Favorite" component={List} options={{ drawerIcon: (({focused}) => <Icon name="ios-heart-circle-outline" style={{color: textColor, marginRight:-15, fontSize:20}} />) }} />
        {/* <Drawer.Screen name="Network Stream" component={List} options={{ drawerIcon: (({focused}) => <Icon name="logo-playstation" style={{color: textColor, marginRight:-15, fontSize:20}} />) }} /> */}
        <Drawer.Screen name="Network Stream" component={List} options={{ drawerIcon: (({focused}) => <Icon name="radio-outline" style={{color: textColor, marginRight:-15, fontSize:20}} />) }} />
        {/* <Drawer.Screen name="Category" component={Category} />
        <Drawer.Screen name="Search" component={Search} />
        <Drawer.Screen name="Movies" component={ListPage} />
        <Drawer.Screen name="TV-Series" component={ListPage} />
        <Drawer.Screen name="Web Series" component={ListPage} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
});

export default App;
