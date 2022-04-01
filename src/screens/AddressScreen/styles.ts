import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: '#fff',
        height: '100%'
    },
    row: {
        marginVertical: 5
    },
    label: {
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#fff',
        padding: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 2,
        height: 40
    },
    errorLabel: {
        color: 'red'
    },
    picker: {
        borderWidth: 1,
        borderColor: '#d6d6d6',
        borderRadius: 5,

    }

})

export default styles