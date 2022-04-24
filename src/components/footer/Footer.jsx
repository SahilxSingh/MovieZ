import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/Moviez.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer_content_logo">
                    <div className="logo" style={{alignItems:'center'}}>
                    <Link to="/"><img src={logo} alt="" style={{width: 250}} /></Link>
                    </div>
                    </div>
                    </div>
                     </div>
                
    );
}

export default Footer;