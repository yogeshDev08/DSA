// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

  export const getAllData = createAsyncThunk('appBrands/getAllData', async () => {
    const response = await axios.get("http://172.16.11.18:5000/fweets/")
    return response?.data?.data
  })

  export const loginManage = createAsyncThunk('appBrands/loginManage', (res) => {
    const response = res
    return response
  })

export const mainFeed = createSlice({
  name: 'appMainFeed',
  initialState: {
    allData: [],
    userData:{}
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action?.payload || []
      })
      .addCase(loginManage.fulfilled, (state, action) => {
        state.userData = action.payload || {}
      })
  }
})

export default mainFeed.reducer
