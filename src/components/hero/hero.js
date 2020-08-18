import React from 'react';
import classes from './hero.module.scss';

import laptop from '../../assets/laptop.png';
import iphone from '../../assets/iphone.png';
import mouse from '../../assets/mouse.png';


export default function Hero() {
    return (
        <div>
            <div className={classes.hero}>
                <div className={classes.divone}>
                    <div className={classes.carousel} >
                        <div>
                            <img src={iphone} />
                            <img src={laptop} />
                        </div>
                    </div>
                    <div className={classes.protect}>
                        <h4>Protect your device.</h4>
                        <div>
                            <div>
                                <h5>1 Year</h5>
                                <h6>Protection Plan</h6>
                                <h4>$100</h4>
                            </div>
                            <div>
                                <h5>2 Year</h5>
                                <h6>Protection Plan</h6>
                                <h4>$200</h4>
                                <img src={mouse} />
                            </div>
                            <div>
                                <h5>3 Year</h5>
                                <h6>Protection Plan</h6>
                                <h4>$300</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>
                        Bolt on extended warranties that <b> unlock additional revenue. </b>
                    </h1>
                    <p>
                        Offering extended warranty to your customers has never been easier. Device Protect seamlessly integrates into your purchase flow, adding value to the customer experience and to your bottom line
                </p>
                    <button>Watch Video</button>
                    <div className={classes.stats} >
                        <div>
                            <h2>5.5m</h2>
                            <p>Customers Worldwide</p>
                        </div>
                        <div>
                            <h2>36k</h2>
                            <p>Points of Sale</p>
                        </div>
                        <div>
                            <h2>$50m</h2>
                            <p>Merchant revenue</p>
                        </div>
                        <div>
                            <h2>2m</h2>
                            <p>Policies written in 2019</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.mobileStats}>
                <div>
                    <h2>5.5m</h2>
                    <p>Customers Worldwide</p>
                </div>
                <div>
                    <h2>36k</h2>
                    <p>Points of Sale</p>
                </div>
                <div>
                    <h2>$50m</h2>
                    <p>Merchant revenue</p>
                </div>
                <div>
                    <h2>2m</h2>
                    <p>Policies written in 2019</p>
                </div>
            </div>
        </div>

    )
}