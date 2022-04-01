import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';
import { StatusBar, SafeAreaView, View, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const Stack = createNativeStackNavigator();

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


export default function ShoppingCartStack() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Stack.Navigator
    >

      <Stack.Screen
        component={ShoppingCartScreen}
        name="Cart"
        options={{
          header: () => (
            <HeaderComponent
              searchValue={searchValue}
              setSearchValue={(val: string) => setSearchValue(val)}
            />
          ),
        }}
      />
      <Stack.Screen
        component={AddressScreen}
        name="Address"
        options={{
          title: 'CheckOut'
        }}
      />
    </Stack.Navigator>
  );
};


