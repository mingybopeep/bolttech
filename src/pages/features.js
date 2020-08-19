import React from 'react';
import Layout from '../components/layout';
import classes from './features.module.scss';

export default function Features(){
    return(
        <Layout>
            <section className={classes.features} >
                <h6>Key Features</h6>
                <h1>Merchant portal with <b>cutting edge features.</b></h1>
                <p>bolttech merchant portal empowers businesses to offer protection services to their customers. It requires minimal IT investment with easy plug & play installation with your website or e-store. We offer seamless and fast integration on tech stack such as shopify, magento, php etc.It is a one-stop-shop protection service solution that will enable your business to generate additional revenue, provide value-added services and offerings to your customer and enhance their shopping experience.</p>
                <div className={classes.left}>
                    <img src=''/>
                    <div>
                        <h2><b>Customer service,</b>Technical and Pricing support.</h2>
                        <p>
                        The merchant portal offers pricing flexibility to set your own margin on the protection product. We provide real-time & dynamic pricing based on products.We are always there to provide service support to you, your team, and your customers.
                        </p>
                    </div>
                </div>
                <div className={classes.right}>
                    <img src=''/>
                    <div>
                        <h2><b>Customer service,</b>Technical and Pricing support.</h2>
                        <p>
                        The merchant portal offers pricing flexibility to set your own margin on the protection product. We provide real-time & dynamic pricing based on products.We are always there to provide service support to you, your team, and your customers.
                        </p>
                    </div>
                </div>
                <div className={classes.left}>
                    <img src=''/>
                    <div>
                        <h2><b>Customer service,</b> Technical and Pricing support.</h2>
                        <p>
                        The merchant portal offers pricing flexibility to set your own margin on the protection product. We provide real-time & dynamic pricing based on products.We are always there to provide service support to you, your team, and your customers.
                        </p>
                    </div>
                </div>
                <button>Sign Me Up</button>
            </section>
        </Layout>
    )
}