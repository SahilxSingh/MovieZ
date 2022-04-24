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
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">MovieZ</Link>
                    </div>
                </div>
                <div className="footer_content_menus">
                    <div className="footer_content_menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        
                        <Link to="/">About us</Link>
                    </div>
                    
                    <div className="footer_content_menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;