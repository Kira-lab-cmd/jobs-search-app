import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

export default function Detail(params) {

    const [jobDetail, setJobDetail] = useState(params.route.params.jobDetail)

    const jobs = useSelector(state => state.jobs)
    const dispatch = useDispatch()



    return (
        <View>
            <Text>Detail</Text>
        </View>
    )
}