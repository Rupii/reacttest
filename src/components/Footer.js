import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import {
    faYoutube,
    faInstagram,
    faTwitter,
    faFacebook
} from "@fortawesome/free-brands-svg-icons" ;
// import './Footer.css' ;

function Footer() {
    return(
        <div className = "social-container">
            <h4 className = "social-title"> Social Follow </h4>
                <a
                    href = "https://www.youtube.com/user/TMobile"
                    className = "youtube social">
                    <FontAwesomeIcon icon = {faYoutube} size = "1.8x" />
                </a>

                <a
                    href = "https://www.instagram.com/"
                    className = "instagram social">
                    <FontAwesomeIcon icon = {faInstagram} size = "1.8x" />
                </a>

                <a
                    href = "https://twitter.com/"
                    className = "twitter social">
                    <FontAwesomeIcon icon = {faTwitter} size = "1.8x" />
                </a>

                <a
                    href = "https://www.facebook.com/"
                    className = "facebook social">
                    <FontAwesomeIcon icon = {faFacebook} size = "1.8x" />
                </a>

        </div>
    );
};

export default Footer;

