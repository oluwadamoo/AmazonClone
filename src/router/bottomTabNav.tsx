
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeStack from './homeStack'
import ShoppingCartStack from './shoppingCartStack'

const Tab = createBottomTabNavigator()
export default function BottomTabNav() {
    return (

        <Tab.Navigator screenOptions={{ tabBarShowLabel: false, tabBarInactiveTintColor: '#ffbd7d', tabBarActiveTintColor: '#e47911', headerShown: false }}>
            <Tab.Screen component={HomeStack} name="Home"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" color={color} size={25} />
                    ),
                }} />
            <Tab.Screen component={HomeScreen} name="profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="user" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen component={ShoppingCartStack} name="shoppingCart"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="shopping-cart" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen component={HomeScreen} name="more"

                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="menu" color={color} size={25} />
                    ),
                }} />
        </Tab.Navigator>

    )
}