import { createSlice } from '@reduxjs/toolkit'

export const taskTitleSlice = createSlice({
  name: 'taskTitle',
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
export const { setUsageTo } = taskTitleSlice.actions

export default taskTitleSlice.reducer