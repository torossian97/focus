import { configureStore } from '@reduxjs/toolkit'
import moneyReducer from '../features/money/moneySlice'
import deadlineReducer from '../features/deadline/deadlineSlice'
import ScrollSelectorReducer from '../features/scrollSelector/scrollSelectorSlice'
import marketFormReducer from '../features/marketForm/marketFormSlice'

export default configureStore({
  reducer: {
    money: moneyReducer,
    deadline: deadlineReducer,
    scrollSelector: ScrollSelectorReducer,
    marketForm: marketFormReducer
  }
})