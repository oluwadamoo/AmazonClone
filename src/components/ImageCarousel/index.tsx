import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useCallback } from 'react'

interface ImageProps {
    images: Array<string>
}
export default function ImageCarousel({ images }: ImageProps) {
    const [activeIndex, setActiveIndex] = useState(0)


    const onFlatlistUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
        console.log(viewableItems);
    }, []);
    return (
        <View style={styles.root}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={Dimensions.get("screen").width - 24}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                data={images}
                renderItem={({ item, index }) => (
                    <Image style={styles.image} source={{ uri: item }} key={index} />
                )}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onFlatlistUpdate}
            />
            <View style={styles.dots}>
                {
                    images.map((img, index) => (
                        <View key={index} style={[styles.dot, {
                            backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'
                        }]} />
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginVertical: 10
    },
    image: {
        margin: 10,
        width: Dimensions.get("screen").width - 40,
        height: 250,
        resizeMode: 'contain'
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        margin: 5
    }
})