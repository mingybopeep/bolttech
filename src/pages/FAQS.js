import React, { useState } from 'react';
import classes from './FAQs.module.scss';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export default function FAQs() {

    const data = {
        customer: [
            {
                q: 'What is boltech?',
                a: 'iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit '
            },
            {
                q: 'How do I use boltech?',
                a: 'Lorem ipsum dolor siincididunt ut labore et dolore magna aliqua. Ut enim ad mint amet, consectetur adipiscing elit, sed do eiusmod tempor im veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit '
            },
            {
                q: 'How much will boltech cost?',
                a: 'Lorem ipsum o eiusmod tempor incididunt ut labore et dolore magna aldolor sit amet, consectetur adipiscing elit, sed diqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit '
            }
        ],
        merchant: [
            {
                q: 'What is boltech?',
                a: 'Lorem ippor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tems nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit '
            },
            {
                q: 'How do I join boltech?',
                a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit '
            },
            {
                q: 'How much can I make with boltech?',
                a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit '
            }
        ]
    }

    const init = {
        section: 'merchant',
        q: 0,
    }

    const [state, setState] = useState(init);

    return (
        <Layout>
            <section className={classes.FAQs}>
                <h1>Frequently Asked Questions</h1>
                <div className={classes.picker}>
                    <h3 className={state.section == 'merchant' ? classes.active : null} onClick={() => setState({ ...state, section: 'merchant' })}>Merchant</h3>
                    <h3 className={state.section != 'merchant' ? classes.active : null} onClick={() => setState({ ...state, section: 'customer' })}>Customer</h3>
                </div>
                {
                   data[state.section].map((question, index) => {

                    let cls = [classes.question];
                    if (state.q == index){
                        cls.push(classes.open)
                    }

                    return (
                        <div className={cls.join(' ')} onClick={() => setState({ ...state, q: index })} >
                            <h3>{question.q}</h3>
                            {state.q == index ? <p>{question.a}</p> : null}
                        </div>
                    )
                })
                }
            </section>
        </Layout >
    )
}