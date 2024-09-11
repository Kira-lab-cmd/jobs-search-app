import { View, Text } from 'react-native'
import React from 'react'

export default function error({ error }) {
    return (
        <View>
            <Text>Error: {error}</Text>
        </View>
    )
}