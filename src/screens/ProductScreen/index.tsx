import { View, Text, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

import product from '../../data/product'
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'
import { useRoute } from '@react-navigation/native'

export default function ProductScreen() {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null)
    const [quantity, setQuantity] = useState(0)

    const route = useRoute()

    // console.warn(route.params)
    return (
        <View style={styles.root}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>{product.title}</Text>

                {/* Image Carousel */}
                <ImageCarousel images={product.images} />

                {/* Option selector */}
                <View style={Platform.OS == 'android' && styles.selector}>
                    <Picker selectedValue={selectedOption} onValueChange={(itemValue) => setSelectedOption(itemValue)}>
                        {
                            product.options.map((option, i) => (
                                <Picker.Item label={option} value={option} key={i} />
                            ))
                        }
                    </Picker>
                </View>
                {/* Price */}
                <Text style={styles.price}>from ${product.price}
                    {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice}</Text>}
                </Text>

                {/* Description */}
                <Text style={styles.description}>
                    {product.description}
                </Text>


                {/* Quantity selector */}
                <View>
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                </View>
                {/* Button */}
                <Button text={"Add To Cart"} onPress={() => { console.warn("Add to Cart") }} containerStyles={{ backgroundColor: '#e3c905' }} />
                <Button text={"Buy Now"} onPress={() => { console.warn('Buy Now') }} />

            </ScrollView>
        </View>
    )
}