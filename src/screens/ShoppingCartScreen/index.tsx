import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CartProductItem from '../../components/CartProductItem'
import QuantitySelector from '../../components/QuantitySelector'
import products from '../../data/cart'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

export default function ShoppingCartScreen({ searchValue }: { searchValue: string }) {
    console.log(searchValue)
    const navigation = useNavigation()

    const totalPrice = products.reduce((summedPrice, product) => (summedPrice + product.item.price * product.quantity), 0)

    const onCheckout = () => {
        navigation.navigate("Address")
    }
    return (
        <View style={styles.page}>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                renderItem={({ item, index }) =>

                    <CartProductItem cartItem={item} key={index} />
                }
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ fontSize: 18 }}>Subtotal ({products.length} items):{' '}
                            <Text style={{ color: '#e47911', fontWeight: 'bold' }}>
                                {totalPrice.toFixed(2)}
                            </Text>
                        </Text>

                        <Button text='Proceed to Checkout' onPress={onCheckout} containerStyles={{ backgroundColor: '#f7e300', borderColor: '#c7b702' }} />
                    </View>
                )}
                ListFooterComponent={() => (
                    <View style={{ height: 50 }} />
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
        // backgroundColor: '#fff'
    }
})