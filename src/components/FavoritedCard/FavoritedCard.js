import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import Button from '../Button/Button'
import { useSelector } from "react-redux"

export default function FavoritedCard({ item, handleDetail, handleDelete }) {

    const name = item.name
    const company = item.company.name
    const location = item.locations[0].name
    const level = item.levels[0].name

    return (
        <View style={{ backgroundColor: "white" }}>
            <TouchableOpacity style={styles.jobContainer} onPress={() => handleDetail(item.id)}>
                <View style={styles.body_container}>
                    <Text style={styles.job_title}>{name}</Text>
                    <Text style={styles.job_company}>{company}</Text>
                    <Text style={styles.job_location}>{location}</Text>
                </View>
                <View style={styles.level_container}>
                    <Text style={styles.level}>{level}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'white', padding: 10 }} onPress={() => handleDelete(item)}>
                <Text style={{ color: 'red', width: 120, fontWeight: 'bold' }}>Favorilerden Kaldır</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    jobContainer: {
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
        alignItems: 'flex-start'
    },
    job_title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    },
    job_company: {
        fontSize: 14,
        marginTop: 5,
    },
    job_location: {
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
    }

})