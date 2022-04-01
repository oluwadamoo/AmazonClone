import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'


interface ProductItemProps {
    product: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;

    }
}
export default function ProductItem({ product }: ProductItemProps) {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate("ProductDetails", { id: product.id })
    }
    return (
        <Pressable onPress={onPress}>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: product.image }} />
                <View style={styles.rightContainer}>
                    <Text numberOfLines={3} style={styles.title}>{product.title}</Text>
                    {/* Ratings */}
                    <View style={styles.ratingsContainer}>

                        {[0, 0, 0, 0, 0].map((el, i) => (
                            <FontAwesome style={styles.star} name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'} size={18} color={'#e47911'} key={i} />

                        ))}
                        <Text>{product.ratings}</Text>
                    </View>
                    <Text style={styles.price}>from ${product.price}
                        {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice}</Text>}
                    </Text>
                </View>

            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',

        // borderTopLeftRadius: 5,
        // borderBottomLeftRadius: 5
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
    }
})