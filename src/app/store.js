import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import marketFormReducer from '../features/marketForm/marketFormSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    marketForm: marketFormReducer
  }
})