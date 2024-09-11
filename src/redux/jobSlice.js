import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    jobs: [],
}

export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload
        },
        addJob: (state, action) => {
            state.jobs.push(action.payload)
        },
        removeJob: (state, action) => {
            state.jobs = state.jobs.filter((job) => job.id !== action.payload)
        },
        clearJobs: state => {
            state.jobs = []
        },
    },
})
export const { setJobs, addJob, removeJob, clearJobs } = jobSlice.actions

export default jobSlice.reducer