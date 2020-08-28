import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SecondScreen from "./src/Screens/SecondScreen";
import FirstScreen from "./src/Screens/FirstScreen";
import ThirdScreen from "./src/Screens/ThirdScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import "react-native-gesture-handler";
import * as eva from "@eva-design/eva";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ApplicationProvider, IconRegistry, Layout } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();


function  StartView ()  {
  return (
    <Tab.Navigator
      initialRouteName="FirstView"
      activeColor="white"
      inactiveColor="#616161"
      labelStyle={{ fontSize: 12 }}
      barStyle={{backgroundColor: '#1b1b1b'}}
    >
      <Tab.Screen
        name="Plan"
        component={FirstScreen}
        options={{
          tabBarLabel: '1',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SecondView"
        component={SecondScreen}
        options={{
          tabBarLabel: '2',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="ThirdView"
        component={ThirdScreen}
        options={{
          tabBarLabel: '3',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>    
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider  {...eva} theme={{ ...eva.dark}}>
<StartView></StartView>
      </ApplicationProvider>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
