import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react'

export default function Button({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    button: {
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: 'tomato',
        borderColor: 'tomato',
        width: width * 0.4,

    }
})