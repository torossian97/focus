import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './charity.css';
import { setCharityTo } from './scrollSelectorSlice'

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

export default function CharitySelector() {
    const charity = useSelector(state => state.scrollSelector.charityWritten)
    const dispatch = useDispatch()
  
    const handleCharityClick = (newValue) => {
        dispatch(setCharityTo(newValue));
    };
  
    return (
    <div class="scrolling-wrapper-flexbox">
        <Card className="card">
            <CardActionArea onClick={event => handleCharityClick(0)}>
                <CardContent>
                    <p>Click me!</p>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className="card">
            <CardActionArea onClick={event => handleCharityClick(1)}>
                <CardContent>
                    <p>{charity}</p>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className="card">
            <CardActionArea onClick={event => handleCharityClick(2)}>
                <CardContent>
                    <p>And me!</p>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className="card">
            <CardActionArea onClick={event => handleCharityClick(3)}>
                <CardContent>
                    <p>And me too!</p>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    )
  }
