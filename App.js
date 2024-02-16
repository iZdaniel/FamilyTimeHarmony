import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {FontAwesome5} from '@expo/vector-icons';


// Plus..
import plus from './assets/plus.png';


// Import screens

import HomeScreen from './screens/HomeScreen';

// import Login from './screens/Login';
// import Signup from './screens/Signup';




const Tab = createBottomTabNavigator();


// Hiding Tab Names...
export default function App () {
  return(
   <NavigationContainer>
    <Tab.Navigator tabBarOptions={{
      showLabel: false,

      //Floating Tab Bar
      style: {
        backgroundColor: 'white',
        posittion: 'absolute',
        bottom: 15,
        marginHorizontal: 20,
        // Max Height
        paddingBottom: 20,
        height: 60,
        borderRadius: 10,
        // Shadow
        elevation: 5,
        paddingHorizontal: 20,

      }
    }}>

    {
      // Tab Screens...
      // with
      // Tab Icons
    }

    <Tab.Screen name={"Home"} component={HomeScreen} options={{
      tabBarIcon: ({focused}) => (
        <View style={{
          // Centering Tab button
          position: 'absolute',
          top: '40%'
        }}>
          <FontAwesome5
            name="home"
            size={25}
            color={focused ? '#2a5d9c' : 'black'}
          >
          </FontAwesome5>
        </View>
      )
    }}></Tab.Screen>


    <Tab.Screen name={"Calendar"} component={CalendarScreen} options={{

      tabBarIcon: ({focused}) => (
        <View style={{
          // Centering Tab button
          position: 'absolute',
          top: '40%'
        }}>
          <FontAwesome5
          name="calendar"
          size={25}
          color={focused ? '#2a5d9c' : 'black'}
          ></FontAwesome5>
        </View>
      )
    }}></Tab.Screen>


    <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
      tabBarIcon: ({focused}) => (
      
        <TouchableOpacity>
          <View style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: '#2a5d9c',
            marginBottom: 23,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={plus} style={{
              width: 25,
              height: 25,
              tintColor: 'white',
              
            }}></Image>
          </View>
        </TouchableOpacity>
      )
    }}></Tab.Screen>


    <Tab.Screen name={"Notification"} component={NotificationScreen} options={{
      tabBarIcon: ({focused}) => (
        <View style={{
          // Centering Tab button
          position: 'absolute',
          top: '40%'
        }}>
          <FontAwesome5
          name="bell"
          size={25}
          color={focused ? '#2a5d9c' : 'black'}
          ></FontAwesome5>
        </View>
      )
    }}></Tab.Screen>


    <Tab.Screen name={"Photo"} component={PhotoScreen} options={{
      tabBarIcon: ({focused}) => (
        <View style={{
          // Centering Tab button
          position: 'absolute',
          top: '40%'
        }}>
          <FontAwesome5
          name="images"
          size={25}
          color={focused ? '#2a5d9c' : 'black'}
          ></FontAwesome5>
        </View>
      )
    }}></Tab.Screen>


    </Tab.Navigator>
   </NavigationContainer>
  );
}

function CalendarScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calendar!</Text>
      
    </View>
  );
}

function EmptyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
    </View>
  );
}

function NotificationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notification!</Text>
      
    </View>
  );
}

function PhotoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Photo!</Text>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
