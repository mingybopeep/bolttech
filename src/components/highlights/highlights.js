import React from 'react';
import classes from './highlights.module.scss';
import screenshot from '../../assets/screenshot.png';
import { Link } from 'gatsby';


export default function Highlights() {

    return (
        <section className={classes.highlights}>
            <div className={classes.left}>
                <div>
                    <h3><b>Seamless</b> extended warranty add-on</h3>
                    <p>
                        Provide your customers with the option to protect their goods without disrupting their user experience. Device Protect is designed to blend in with your purchase flow, making it feel seamless, adding value to their purcahse and your bottom line.
                    </p>
                    < Link to='/' className={classes.link}>See more features</Link>
                </div>
                <div>
                    <img src={screenshot} />
                    <div className={classes.decoration1} />
                    <div className={classes.decoration2} />
                </div>
            </div>

            <div className={classes.right}>
                <div>
                    <h3><b>Easy to integrate</b> to get you started fast</h3>
                    <p>
                        Whether you’re using Shopify, Magento, BigCommerce, SFCC or any other eCommerce platform, Device Protect provides frictionless integreations so you can easily plug-and-play
                    </p>
                    <Link to='/' className={classes.link}>Read docs</Link>
                </div>
                <div>
                    <img src={screenshot} />
                    <div className={classes.decoration3} />
                    <div className={classes.decoration4} />
                </div>
            </div>

            <div className={classes.left}>
                <div>
                    <h3><b>Simple tracking and management</b> for easy reporting</h3>
                    <p>
                        Whether you’re using Shopify, Magento, BigCommerce, SFCC or any other eCommerce platform, Device Protect provides frictionless integreations so you can easily plug-and-play
                    </p>
                    <Link to='/' className={classes.link}>Read docs</Link>
                </div>
                <div>
                    <img src={screenshot} />
                    <div className={classes.decoration1} />
                    <div className={classes.decoration2} />
                </div>
            </div>

        </section>
    )
}