import { createSlice } from '@reduxjs/toolkit'

export const moneySlice = createSlice({
  name: 'money',
  initialState: {
    value: 0
  },
  reducers: {
    setTo: (state, action) => {
        state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setTo } = moneySlice.actions

export default moneySlice.reducer