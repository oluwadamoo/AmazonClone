import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductItem from '../../components/ProductItem';

import products from '../../data/products';


export default function HomeScreen({searchValue}:{searchValue:string}) {
    console.log(searchValue)
    return (
        <View style={styles.page}>
            {/* Render PRoduct Component */}

            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                renderItem={({ item, index }) => <ProductItem product={item} key={index} />
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
        flex: 1
    }
})