import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './charity.css';
import { setCharityTo } from './scrollSelectorSlice'
import salvation from '../../assets/salvation-army.png';
import hh from '../../assets/hh.png';
import stjudes from '../../assets/stjudes.png';
import bcrf from '../../assets/bcrf.png';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

export default function CharitySelector() {
    const charity = useSelector(state => state.scrollSelector.charity)
    const dispatch = useDispatch()
  
    const handleCharityClick = (newValue) => {
        dispatch(setCharityTo(newValue));
    };
  
    return (
    <div class="scrolling-wrapper-flexbox fade">
        <Card className={charity == 0 ? "charityCard active" : "charityCard"}>
            <CardActionArea onClick={event => handleCharityClick(0)}>
                <CardContent>
                    <img src={salvation} className="charityImage"/>
                    <p className="charityText">Salvation Army</p>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={charity == 1 ? "charityCard active" : "charityCard"}>
            <CardActionArea onClick={event => handleCharityClick(1)}>
                <CardContent>
                    <img src={hh} className="charityImage"/>
                    <p className="charityText">Habitat for Humanity</p>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={charity == 2 ? "charityCard active" : "charityCard"}>
            <CardActionArea onClick={event => handleCharityClick(2)}>
                <CardContent>
                    <img src={stjudes} className="charityImage"/>
                    <p className="charityText">St. Jude's Hospital</p>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={charity == 3 ? "charityCard active" : "charityCard"}>
            <CardActionArea onClick={event => handleCharityClick(3)}>
                <CardContent>
                    <img src={bcrf} className="charityImage"/>
                    <p className="charityText">BCRF</p>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    )
  }
