import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// import screens
import HomeScreen from "../screens/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import PostScreen from "../screens/PostScreen";
import NotificationScreen from "../screens/NotificationScreen";
import PhotoAlbumScreen from "../screens/PhotoAlbumScreen";
import { colors } from "../components/colors";
const {primary, brand, black} = colors;
import { Ionicons, Octicons } from '@expo/vector-icons';



const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});



const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -18,
            
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            
            ...styles.shadow,
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 56,
                height: 56,
                borderRadius: 50,
                borderWidth: 1,
                backgroundColor: '#2a5d9c'
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);


const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
            }}
            screenOptions={{
                tabBarStyle: { 
                    position: 'absolute', 
                    height: 60, 
                    paddingBottom: 20,
                    ...styles.shadow
                }
          }}
        >
          
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Ionicons 
                            name="home" 
                            size={23} 
                            color="black" 
                            style={{
                                resizeMode: 'contain',
                                color: focused ? '#2a5d9c' : 'black'
                            }}
                        />
                        <Text style={{color: focused ? '#2a5d9c' : '#000000'}}>Home</Text>
                    </View>
                )
            }}
            
            ></Tab.Screen>

            <Tab.Screen name="Calendar" component={CalendarScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Ionicons 
                                name="calendar-number" 
                                size={23} 
                                color="black"
                                style={{
                                    resizeMode: 'contain',
                                    color: focused ? '#2a5d9c' : 'black'
                                }} 
                                />
                            <Text style={{color: focused ? '#2a5d9c' : '#000000'}}>Calendar</Text>
                        </View>
                    )
                }}
            ></Tab.Screen>


            <Tab.Screen name="Post" component={PostScreen}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <Image 
                            source={require('../assets/icon/plusrbg.png')}
                            resizeMode="contain"
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 50,
                            
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props}/>
                    )
                }}
            ></Tab.Screen>


            <Tab.Screen name="Notification" component={NotificationScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Ionicons 
                                name="notifications" 
                                size={23} 
                                color="black"
                                style={{
                                    resizeMode: 'contain',
                                    color: focused ? '#2a5d9c' : 'black'
                                }} 
                                />
                            <Text style={{color: focused ? '#2a5d9c' : '#000000'}}>Notifications</Text>
                        </View>
                    )
                }}
            ></Tab.Screen>


            <Tab.Screen name="Photo Album" component={PhotoAlbumScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Ionicons 
                                name="images" 
                                size={23} 
                                color="black"
                                style={{
                                    resizeMode: 'contain',
                                    color: focused ? '#2a5d9c' : 'black'
                                }} 
                                />
                            <Text style={{color: focused ? '#2a5d9c' : '#000000'}}>Album</Text>
                        </View>
                    )
                }}            
            ></Tab.Screen>
         
        </Tab.Navigator>
    );
}


export default Tabs;