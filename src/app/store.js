import { configureStore } from '@reduxjs/toolkit'
import stakeInfoReducer from '../features/stakeInfo/stakeInfoSlice'
import ScrollSelectorReducer from '../features/scrollSelector/scrollSelectorSlice'
import taskInfoReducer from '../features/taskInfo/taskInfoSlice'

export default configureStore({
  reducer: {
    stakeInfo: stakeInfoReducer,
    scrollSelector: ScrollSelectorReducer,
    taskInfo: taskInfoReducer
  }
})