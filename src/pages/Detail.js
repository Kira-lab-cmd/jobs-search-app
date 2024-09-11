import { Linking } from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import JobDetailsCard from '../components/JobDetailsCard/JobDetailsCard';

export default function Detail(params) {

    const [jobDetail, setJobDetail] = useState(params.route.params.jobDetail)

    const jobs = useSelector(state => state.jobs)
    const dispatch = useDispatch()

    const navigation = useNavigation()
    const handleFavorited = async jobDetaıl => {
        await dispatch(addJob(jobDetail))
        navigation.navigate('Favorited')
    }

    const handleSubmit = submit => {
        Linking.openURL(submit)
    }



    return (
        <JobDetailsCard
            jobDetail={jobDetail}
            handleSubmit={handleSubmit}
            handleFavorited={handleFavorited} />

    )
}