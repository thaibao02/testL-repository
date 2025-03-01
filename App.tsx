import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Foundation} from '@expo/vector-icons';
import MyFunctionComponent from './components/MyFunctionComponent';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import FlastList from './components/Flaslist';
import MySectionList from './components/SectionList';
import MyDrawer from './components/MyDrawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootstackParamList } from "./types/NavigationType";
import { RootTabParamList } from './types/NavigationType';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/screen2'
import Home from './screens/Screen1';
import Detail from './screens/screen2';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import SettingScreen from './screens/SettingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator<RootstackParamList>();
const Tab = createBottomTabNavigator<RootstackParamList>();
export default function App() {
  const [isRemembered, setIsRemembered] = useState(false);
  const Drawer = createDrawerNavigator<RootstackParamList>();
  const screenOptions = ({route}: {route: any}) => ({
    drawerIcon: ({color, size}: {color: string, size: number}) => {
      let iconName : string = '';
      if(route.name === 'Home'){
        iconName = 'home-outline';
      }else if(route.name === 'Setting'){
        iconName = 'settings-outline';
      }
      return <Ionicons name={iconName} size={size} color={color}/>
    },
    drawerActiveTintColor: 'blue',
    drawerInactiveTintColor: 'gray',
  });

  const Stack = createStackNavigator<RootstackParamList>();
  const Tab = createBottomTabNavigator<RootTabParamList>();
  const HomeTabs = () => {
    return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Screen1}/>
        <Tab.Screen name="Setting" component={SettingScreen}/>
      </Tab.Navigator>
    );
  }
  const AppStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeTabs} options={{headerShown : false}}/>
        <Stack.Screen name="Detail" component = {Detail}/>
      </Stack.Navigator>
    );
  }
  return (
    <View style={{flex: 1}}>
    {/* //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />

    //   <Ionicons name="albums" size={32} color="green" />
    //   <Foundation name="social-twitter" size={32} color="blue" />
    // 
    
    //scroll view horizontal = {true } đay là cuộn ngang , còn mặc định cuộn dọc
    // <ScrollView horizontal = {true} >
    //   <View style = {styles.page}>
    //     <Text>Page 1</Text>
    //   </View>
    //   <View style = {styles.page}>
    //     <Text>Page 2</Text>
    //   </View>
    //   <View style = {styles.page}>
    //     <Text>Page 3</Text>
    //   </View>
      
    // </ScrollView>

    // // FUNCTION COMPONENT
    // <MyFunctionComponent/> */}

    {/* // grerting (props)

    <Greeting name='bao' address='Da Nang'/>
    <Greeting name='bao' address=''/> */}
    
    {/* //State 
    <Counter/> */}
    
    {/* //flast list
    <FlastList/> */}

    {/* //section list 
    <MySectionList/> */}
    {/* //drawer layout android
    <MyDrawer/> */}

    

    {/* <GestureHandlerRootView >
    <View style = {styles.container}>
      <View>
        <Text style = {{margin : 40, justifyContent: 'center', fontWeight : 'bold',fontSize : 35}}>Wellcome back</Text> 
        
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        secureTextEntry={false} 
        onChangeText={(text) => console.log(text)} 
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your passwordd"
        secureTextEntry={true} 
        onChangeText={(text) => console.log(text)} 
      />
      
      
      
    </View>
    </GestureHandlerRootView> */}

    <NavigationContainer>
        {/* <Root.Navigator initialRouteName="Home">
          <Root.Screen name = "Home" component={Home}/>
          <Root.Screen name = "Detail" component={Detail}/>
        </Root.Navigator> */}
        {/* <Tab.Navigator 
          initialRouteName='Home'
          screenOptions={({route}) => ({
            tabBarIcon : ({color, size}) => {
              let iconName: 'home' | 'settings' = 'home';
              if(route.name === 'Setting'){
                iconName = 'settings';
              }
              return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor : 'tomato',
            tabBarInactiveTintColor : 'gray',
          })}
          
          >
          <Tab.Screen  name="Home" component={Screen1}/>
          <Tab.Screen name="Setting" component={SettingScreen}/>
        </Tab.Navigator> */}


        // drawer navigation
        {/* <Drawer.Navigator
          initialRouteName='Home'
          screenOptions={screenOptions}
        >
          <Drawer.Screen name="Home" component={Screen1}/>
          <Drawer.Screen name="Setting" component={SettingScreen}/>
        </Drawer.Navigator> */}

        <AppStack/>
    </NavigationContainer> 
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center'
  },
  input: {
    width: '80%',
    margin : 20,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 5,
  }
});

