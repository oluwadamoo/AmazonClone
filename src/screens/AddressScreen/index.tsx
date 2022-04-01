import { View, Text, TextInput, Alert, Platform, ScrollView, KeyboardAvoidingView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'
import countryList from 'country-list'
import Button from '../../components/Button'

const countries = countryList.getData()
export default function AddressScreen() {

    const [country, setCountry] = useState(countries[0].code)
    const [fullname, setFullname] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [addressError, setAddressError] = useState('')
    const [city, setCity] = useState("")


    const onCheckout = () => {
        if (addressError) {
            Alert.alert('Please fix all field errors before submitting');

            return;
        }
        if (!fullname) {
            Alert.alert('Please fill in the fullname field');
            return
        }
        if (!phone) {
            Alert.alert('Please fill in the phone number field');
            return;
        }
    }


    const validateAddress = () => {
        if (address.length < 3) {
            setAddressError('Address is too short')
        }
    }

    return (
        <View style={styles.root}>
            <StatusBar backgroundColor={"#fff"} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                    <View style={[styles.row, Platform.OS == 'android' && styles.picker
                    ]}>
                        <Picker selectedValue={country} onValueChange={setCountry}>
                            {
                                countries.map((country, index) => (
                                    <Picker.Item value={country.code} label={country.name} key={index} />

                                ))
                            }
                        </Picker>
                    </View>

                    {/* Full name */}
                    <View style={styles.row}>
                        <Text style={styles.label}>Full name (First and Last name)</Text>
                        <TextInput style={styles.input} placeholder="Full name" value={fullname} onChangeText={setFullname} />
                    </View>

                    {/* Phone number */}
                    <View style={styles.row}>
                        <Text style={styles.label}>Phone number</Text>
                        <TextInput style={styles.input} placeholder="Phone" keyboardType='phone-pad' value={phone} onChangeText={setPhone} />
                    </View>

                    {/* Address */}
                    <View style={[styles.row,]}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput style={[styles.input, { borderColor: addressError.length > 0 ? 'red' : 'lightgrey' }]} placeholder="Address" value={address} onChangeText={(text) => {
                            setAddress(text)
                            setAddressError('')
                        }}
                            onEndEditing={validateAddress}
                        />
                        {!!addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>City</Text>
                        <TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity} />
                    </View>

                    <Button text="Checkout" onPress={onCheckout} />
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

