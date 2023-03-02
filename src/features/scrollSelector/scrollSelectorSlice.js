import { createSlice } from '@reduxjs/toolkit'

const charities = ["SJ", "HH", "Happy Man", "WEHS"]
const tasks = ["writing", "studying", "programming", "video editing"]

export const scrollSelectorSlice = createSlice({
  name: 'scrollSelector',
  initialState: {
    charity: 0,
    charityWritten: charities[0],
    task: 0,
    taskWritten: tasks[0]
  },
  reducers: {
    setCharityTo: (state, action) => {
      state.charity = action.payload
      state.charityWritten = charities[action.payload]
    },
    setTaskTo: (state, action) => {
      state.task = action.payload
      state.taskWritten = tasks[action.payload]
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCharityTo, setTaskTo } = scrollSelectorSlice.actions

export default scrollSelectorSlice.reducer