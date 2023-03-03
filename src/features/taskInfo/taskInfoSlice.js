import { createSlice } from '@reduxjs/toolkit'

const tasks = ["writing", "studying", "programming", "video editing"]

export const taskInfoSlice = createSlice({
  name: 'taskInfo',
  initialState: {
    taskTitle: "",
    task: 0,
    taskWritten: tasks[0],
    /*task data*/
    // writing
    wordCount: 0,
    writingSummary: "",

  },
  reducers: {
    setTitleTo: (state, action) => {
        state.taskTitle = action.payload
    },
    setTaskTo: (state, action) => {
      state.task = action.payload
      state.taskWritten = tasks[action.payload]
    },
    setWritingSummaryTo: (state, action) => {
      state.writingSummary = action.payload
    },
    setWordCountTo: (state, action) => {
      state.wordCount = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setTitleTo, setTaskTo, setWritingSummaryTo, setWordCountTo } = taskInfoSlice.actions

export default taskInfoSlice.reducer