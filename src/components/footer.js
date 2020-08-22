import React from 'react';
import shopify from '../assets/shopify.png';
import bigcom from '../assets/bigcom.png';
import magneto from '../assets/magneto.png';
import woo from '../assets/woo.png';
import node from '../assets/node.png';
import php from '../assets/php.svg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import classes from './footer.module.scss';

import logo from '../assets/logowhite.png';

import { Link } from 'gatsby';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <h3>seamlessly integrating with</h3>
            <div className={classes.logos}>
            <img src={node} />
            <img src={php} />
                <img src={magneto} />
            </div>

            <div className={classes.linkscontainer}>
                <div>
                    <Link className={classes.link} to='/contact' >Contact</Link>
                    <Link className={classes.link} to='/FAQs' >FAQ</Link>
                    <Link className={classes.link} to='/pages/customercare' >Customer Care</Link>
                </div>
                <div>
                    <Link className={classes.link} to='/pages/tos' >Terms of service</Link>
                    <Link className={classes.link} to='/pages/privacypolicy' >Privacy policy</Link>
                    <Link className={classes.link} to='/pages/cookiepolicy' >Cookie policy</Link>
                </div>
            </div>
            <div className={classes.socials}>
                <a href='/'>
                    <FontAwesomeIcon className={classes.icon} icon={["fab", "facebook"]}  />
                </a>
                <a href='/'>
                    <FontAwesomeIcon className={classes.icon} icon={["fab", "twitter"]} />
                </a>
                <a href='/'>
                    <FontAwesomeIcon className={classes.icon} icon={["fab", "linkedin"]} />
                </a>
                <a href='/'>
                    <FontAwesomeIcon className={classes.icon} icon={["fab", "youtube"]}  style={{color: "#FFF"}} />
                </a>
            </div>
            <span> © 2020 bolttech | All rights reserved.</span>
            <img src={logo} />
        </footer>
    )
}