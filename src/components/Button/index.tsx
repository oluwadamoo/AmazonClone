import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

interface ButtonProps {
    text: string,
    onPress: Function;
    containerStyles?: object
}
export default function Button({ text, onPress, containerStyles }: ButtonProps) {
    return (
        <Pressable onPress={() => onPress()} style={({ pressed }) => [styles.root, containerStyles, { opacity: pressed ? .5 : 1 }]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e47911',
        marginVertical: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a15e1b'
    },
    text: {
        fontSize: 16,

    }
})