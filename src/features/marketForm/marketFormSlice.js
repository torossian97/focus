import { createSlice } from '@reduxjs/toolkit'

export const marketFormSlice = createSlice({
  name: 'marketForm',
  initialState: {
    usage: "writing"
  },
  reducers: {
    setUsageTo: (state, action) => {
        state.usage = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUsageTo } = marketFormSlice.actions

export default marketFormSlice.reducer