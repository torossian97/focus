import React from 'react';
import './footer.css';
import logoUrl from '../../assets/forcemeto.svg';
import {Link} from "react-router-dom";

const Footer = () => (
  <div className="footer">
      <Link to="/"><img className="logo" src={logoUrl} alt="ForceMeTo"/></Link>
      <h6>This is a test footer with spacing at the top</h6>
  </div>
)
export default Footer;
