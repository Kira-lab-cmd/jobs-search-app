import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import FavoritedCard from '../components/FavoritedCard/FavoritedCard';
import { removeJob } from '../redux/jobSlice'

export default function Favorited() {

    const { jobs } = useSelector(state => state.jobs)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const handleDetail = (item) => {
        navigation.navigate('JobDetails', { jobsDetail: item });
    };
    const handleDelete = item => {
        dispatch(removeJob(item))
    }

    const renderItem = ({ item }) => (
        <FavoritedCard
            item={item}
            handleDetail={handleDetail}
            handleDelete={handleDelete}
        />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={jobs}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()} />
        </View>
    )
}

const styles = StyleSheet.create({ container: { flex: 1 } })