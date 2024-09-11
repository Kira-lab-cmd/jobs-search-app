import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import API_URL from '../constant/api'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/loading/loading'
import useFetch from '../hooks/useFetch'
import JobCard from '../components/JobCard/JobCard'
import error from '../components/error/error'

export default function Home() {

    const [jobsData, setJobsData] = useState([])
    const { data, loading, error } = useFetch(API_URL)

    const navigation = useNavigation()

    useEffect(() => {
        if (data && data.results) {
            setJobsData(data.results)
        }
    }, [data])

    const renderJobs = ({ item }) => {
        return (
            <JobCard item={item} onPress={() => navigation.navigate('JobDetails', { jobDetail: item })} />
        )
    }

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <error error={error} />
    }
    return (
        <View>
            <FlatList
                data={jobsData}
                renderItem={renderJobs}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}