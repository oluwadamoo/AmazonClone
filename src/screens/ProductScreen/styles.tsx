import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: '#fff',

    },
    title: {

    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    },
    description: {
        marginVertical: 10,
        lineHeight: 20
    },
    selector: {
        borderWidth: 1,
        borderColor: '#d6d6d6',
        borderRadius: 5,

    }

})

export default styles