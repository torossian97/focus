import React from 'react';
import './header.css';
import logoUrl from '../../assets/forcemeto.svg';
import {Link} from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="">
      <Link to="/"><img className="logo" src={logoUrl} alt="ForceMeTo"/></Link>
    </div>
    <div className="navigationObject">
      <Link to="/"><h3>Home</h3></Link>
    </div>
    <div className="navigationObject">
      <Link to="/demo"><h3>Demo</h3></Link>
    </div>
  </div>
)
export default Header;
