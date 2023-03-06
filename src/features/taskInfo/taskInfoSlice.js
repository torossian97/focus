import { createSlice } from '@reduxjs/toolkit'

const tasks = ["writing", "studying", "programming", "video editing", "designing"]
const designTypes = ["UI mockups", "typography", "publication art"]

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
    // studying
    count: 0,
    assignmentSummary: "",
    // programming
    vcUsername: "",
    programmingSummary: "",
    // video editing
    videoLength: 1,
    videoSummary: "",
    // video editing
    designIndex: 0, 
    designType: designTypes[0],
    designSummary: "",

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
    setVcUsernameTo: (state, action) => {
      state.vcUsername = action.payload
    },
    setProgrammingSummaryTo: (state, action) => {
      state.programmingSummary = action.payload
    },
    setVideoLengthTo: (state, action) => {
      state.videoLength = action.payload
    },
    setDesignTypeTo: (state, action) => {
      state.designIndex = action.payload
      state.designType = designTypes[action.payload]
    },
  }
})

// Action creators are generated for each case reducer function
export const { setTitleTo,
  setTaskTo,
  setWritingSummaryTo,
  setWordCountTo,
  setVideoLengthTo,
  setVcUsernameTo,
  setProgrammingSummaryTo,
  setDesignTypeTo } = taskInfoSlice.actions

export default taskInfoSlice.reducer