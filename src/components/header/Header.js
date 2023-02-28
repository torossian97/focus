import React from 'react';
import './header.css';
import logoUrl from '../../assets/logo.png';
import {Link} from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="">
      <Link to="/"><img className="logo" src={logoUrl} alt="ForceMeTo"/></Link>
    </div>
    <div className="navigationObject">
      <Link to="/demo"><h3>DEMO</h3></Link>
    </div>
  </div>
)
export default Header;
