import React from 'react';
import './footer.css';
import logoUrl from '../../assets/forcemeto.svg';
import {Link} from "react-router-dom";

const Footer = () => (
  <div className="footer">
      <Link to="/"><img className="logoFooter" src={logoUrl} alt="ForceMeTo"/></Link>
      <h6>© 2023 Vosian Technologies, Inc.</h6>
  </div>
)
export default Footer;
