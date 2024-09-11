import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function JobCard({ item, onPress }) {

    const name = item.name
    const location = item.locations[0].name
    const level = item.levels[0].name
    const company = item.company.name

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.body_container}>
                <Text style={styles.jobTitle}>{name}</Text>
                <Text>Sprinklr</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
            <View style={styles.level_container}>
                <Text style={styles.jobCompany}>{company}</Text>
                <Text style={styles.level}>{level}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10,
        marginTop: 10,
    },
    body_container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    jobTitle: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    },
    jobCompany: {
        fontSize: 14,
        marginTop: 5,
    },
    location: {
        marginTop: 5,
        backgroundColor: 'tomato',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        padding: 3,
        borderRadius: 8,
    },
    level_container: {
        flex: 1,
        alignItems: 'flex-end',
    },
    level: {
        color: 'tomato',
        fontWeight: '600',
        fontSize: 15,
    },



})