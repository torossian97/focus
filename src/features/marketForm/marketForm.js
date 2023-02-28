import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select, MenuItem, FormControl, InputLabel, Box} from '@mui/material';
import { setUsageTo } from './marketFormSlice'

export default function MarketForm() {
  const usage = useSelector(state => state.counter.usage)
  const task = useSelector(state => state.counter.task)
  const dispatch = useDispatch()

  const handleUsageChange = (event, newValue) => {
    dispatch(setUsageTo(newValue));
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="usage-select-label"></InputLabel>
        <Select
            labelId="usage-select-label"
            id="usage-select"
            value={usage}
            defaultValue={usage}
            onChange={handleUsageChange}
        >
            <MenuItem value={"writing"}>writing</MenuItem>
            <MenuItem value={"programming"}>programming</MenuItem>
            <MenuItem value={"video editing"}>video editing</MenuItem>
        </Select>
        </FormControl>
      </Box>
    </div>
  )
}