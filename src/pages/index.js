import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero/hero';
import Calculator from '../components/calculator/calculator';
import BlogComponent from '../components/blogcomponent/blogcomponent';

import jigsawimg from '../assets/jigsawimg.png';
import dollarimg from '../assets/dollarimg.png';
import heartimg from '../assets/heartimg.png';

import classes from './index.module.scss';
import Highlights from '../components/highlights/highlights';

export default function IndexPage() {
    return (
       <Layout>
           <Hero />
           <div className={classes.home_about}>
                <div>
                    <img src={dollarimg}/>
                    <h2>Unlock additional revenue streams.</h2>
                    <p>
                        {`Provide your customers a way to protect their products and we’ll look after the rest. Our dynamic pricing feature lets you set your own product margin on platform, enabling flexibility & additional product revenue streams.`}
                    </p>
                </div>
                <div>
                    <img src={heartimg}/>
                    <h2>Build more customer loyalty.</h2>
                    <p>
                        {`Your engagement with your customers shouldn’t end when you’ve delivered their product. Offering extended warranty keeps them connected with your business for longer, increasing return visits to your store`}
                    </p>
                </div>
                <div>
                    <img src={jigsawimg}/>
                    <h2>Simple, fast and seamless integration.</h2>
                    <p>
                        {`Our extended warranty embeds seamlessly into your customer’s purchase flow. The plug & play software means we can have you up and running in no time, with technical support when you need it.`}
                    </p>
                </div>
           </div>
           <Calculator />
           <button className={classes.buttons}>Sign me up</button>
           <Highlights />
           <button className={classes.buttons}>Sign me up</button>
           <BlogComponent />
        </Layout>
    )
} 