import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';


interface CartProductItemProps {
    cartItem: {
        id: string,
        quantity: number,
        option?: string,
        item: {
            id: string;
            title: string;
            image: string;
            avgRating: number;
            ratings: number;
            price: number;
            oldPrice?: number;

        }
    }

}
export default function CartProductItem({ cartItem }: CartProductItemProps) {
    const { quantity: quantityProp, item } = cartItem

    const [quantity, setQuantity] = useState(quantityProp)

    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.rightContainer}>
                    <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                    {/* Ratings */}
                    <View style={styles.ratingsContainer}>

                        {[0, 0, 0, 0, 0].map((el, i) => (
                            <FontAwesome style={styles.star} name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'} size={18} color={'#e47911'} key={i} />

                        ))}
                        <Text>{item.ratings}</Text>
                    </View>
                    <Text style={styles.price}>from ${item.price}
                        {item.oldPrice && <Text style={styles.oldPrice}>${item.oldPrice}</Text>}
                    </Text>
                </View>

            </View>

            <View style={styles.quantityContainer}>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    row: {
        flexDirection: 'row',

    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',

    },
    rightContainer: {
        padding: 10,
        flex: 3
    },
    title: {
        fontSize: 18,

    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    star: {
        margin: 2
    },
    quantityContainer: {
        margin: 5
    }
})