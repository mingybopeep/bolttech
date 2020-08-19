import React, {useState} from 'react';
import classes from './contact.module.scss';
import Layout from '../components/layout';
import {Link} from 'gatsby';

export default function Contact() {

    const init = {
        fname: '',
        lname: '',
        email: '',
        number: '',
        line: '',
        message: ''
    }

    const inputHandler = (e, field) => {
        let myState = { ...state };

        myState[field] = e.target.value
        setState(myState);
    }

    const [state, setState] = useState(init);
    return (
        <Layout>
        <section className={classes.contact}>
            <div>
                <h1>Contact</h1>
                <div>
                    <div className={classes.fname}>
                        <h6>First Name</h6>
                        <input value={state.fname} onChange={e => inputHandler(e, 'fname')} />
                    </div>
                    <div className={classes.lname}>
                        <h6>Last Name</h6>
                        <input value={state.lname} onChange={e => inputHandler(e, 'lname')} />
                    </div>
                    <div>
                        <h6>Email</h6>
                        <input value={state.email} onChange={e => inputHandler(e, 'email')} />
                    </div>
                    <div>
                        <h6>Phone Number</h6>
                        <input value={state.number} onChange={e => inputHandler(e, 'number')} />
                    </div>
                    <div>
                        <h6>Line</h6>
                        <input value={state.line} onChange={e => inputHandler(e, 'line')} />
                    </div>
                    <div>
                        <h6>Message</h6>
                        <textarea type='textarea' rows='4' value={state.message} onChange={e => inputHandler(e, 'message')} />
                    </div>
                    <button>Send</button>
                </div>
                <div className={classes.address}>
                    <p>
                    <b>Hong Kong</b> <br/>Bolttech Management Limited Room 1902, 19F, Lee Garden One 33 Hysan Avenue Causeway Bay Hong Kong
                    </p>

                    <p>
                    <b>Hong Kong</b> <br/>Bolttech Management Limited Room 1902, 19F, Lee Garden One 33 Hysan Avenue Causeway Bay Hong Kong
                    </p>
                    <Link className={classes.link} to='/claim'>Make a claim</Link>
                </div>
            </div>
        </section>
        </Layout>
    )
}