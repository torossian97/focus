import { createSlice } from '@reduxjs/toolkit'

const charities = ["SJ", "HH", "Happy Man", "WEHS"]

export const scrollSelectorSlice = createSlice({
  name: 'scrollSelector',
  initialState: {
    charity: 0,
    charityWritten: charities[0]
  },
  reducers: {
    setCharityTo: (state, action) => {
      state.charity = action.payload
      state.charityWritten = charities[action.payload]
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCharityTo } = scrollSelectorSlice.actions

export default scrollSelectorSlice.reducer