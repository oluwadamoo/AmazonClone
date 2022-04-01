import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface QuantityProps {
    quantity: number;
    setQuantity: Function
}
export default function QuantitySelector({ quantity, setQuantity }: QuantityProps) {
    const onMinus = () => {
        setQuantity(Math.max(0, quantity - 1))
    }
    const onPlus = () => {
        setQuantity(quantity + 1)
    }
    return (
        <View style={styles.root}>
            <Pressable style={styles.button} onPress={onMinus}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable style={styles.button} onPress={onPlus}>
                <Text style={styles.buttonText}> +</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        width: 130,
        justifyContent: 'space-between'
    },
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1'
    },
    buttonText: {
        fontSize: 18
    },
    quantity: {
        color: '#007eb9'
    }
})