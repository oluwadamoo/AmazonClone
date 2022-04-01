
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNav from './bottomTabNav';
import ProductScreen from '../screens/ProductScreen';
import { TextInput, View, SafeAreaView, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';



interface HeaderComponentProps {
    searchValue: string;
    setSearchValue: (val: string) => void;
}

const HeaderComponent = ({
    searchValue,
    setSearchValue,
}: HeaderComponentProps) => {
    console.log(searchValue)

    return (
        <SafeAreaView style={{ backgroundColor: '#22e3dd' }}>
            <StatusBar backgroundColor={'#22e3dd'} />

            <View
                style={{
                    margin: 10,
                    padding: 5,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Feather name="search" size={20} />
                <TextInput
                    style={{ height: 40, marginLeft: 10 }}
                    placeholder="Search..."
                    value={searchValue}
                    onChangeText={setSearchValue}
                />
            </View>
        </SafeAreaView>
    );
};


const Stack = createNativeStackNavigator();
export default function HomeStack() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => (
                    <HeaderComponent
                        searchValue={searchValue}
                        setSearchValue={(val: string) => setSearchValue(val)}
                    />
                ),
            }}>
            <Stack.Screen component={HomeScreen} name="HomeScreen" />
            <Stack.Screen component={ProductScreen} name="ProductDetails" />
        </Stack.Navigator>
    )
}