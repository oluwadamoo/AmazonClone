
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNav from './bottomTabNav';


const Root = createNativeStackNavigator();
export default function Router() {
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{
                headerShown: false
            }}>
                <Root.Screen component={BottomTabNav} name="HomeTab" />
            </Root.Navigator>
        </NavigationContainer>
    )
}