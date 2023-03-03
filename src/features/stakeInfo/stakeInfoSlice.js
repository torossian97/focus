import { createSlice } from '@reduxjs/toolkit'
import { format } from 'react-string-format';

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var dateNow = Date.now()
// round to nearest half hour, minimum 30 minutes away
if((dateNow % 3600000) < 1800000){
  dateNow = dateNow - (dateNow % 3600000);
  dateNow = dateNow + 3600000;
}else{
  dateNow = dateNow - (dateNow % 3600000);
  dateNow = dateNow + 3600000 + 1800000;
}

const toWrittenDate = (date) => {
  var dateTimeNow = new Date(date)
  var day = weekday[dateTimeNow.getDay()]
  var hour = dateTimeNow.getHours()
  var minutes = dateTimeNow.getMinutes()
  var apm = "am"

  // transform to get am/pm and 12-hour clock right
  if(hour == 12){
    apm = "pm"
  } else if(hour == 0){
    hour = 12
  } else if(hour > 12){
    hour = hour - 12
    apm = "pm"
  }

  //transform to ensure minutes have 2 digits even for single digit numbers
  if(minutes.toString().length < 2){
    minutes = '0' + minutes.toString()
  }

  return format('{0} @ {1}:{2} {3}', day, hour, minutes, apm)
};

export const stakeInfoSlice = createSlice({
  name: 'stakeInfo',
  initialState: {
    date: dateNow,
    dateWritten: toWrittenDate(dateNow),
    money: 0
  },
  reducers: {
    setDateTo: (state, action) => {
      state.date = action.payload
      state.dateWritten = toWrittenDate(action.payload)
    },
    setMoneyTo: (state, action) => {
      state.money = action.payload
  }
  }
})

// Action creators are generated for each case reducer function
export const { setDateTo, setMoneyTo } = stakeInfoSlice.actions

export default stakeInfoSlice.reducer