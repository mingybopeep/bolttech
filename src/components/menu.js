import React from 'react';
import {Link} from 'gatsby';
import classes from './menu.module.scss';

export default function Menu(props){
    return(
        <menu>
            <Link to='/features'>Features</Link>
            <Link to='/FAQS'>FAQS</Link>
            <Link to='/allblogs'>Blog</Link>
            <Link to='/'>Documentation</Link>
            <Link to='/claims'>Make a claim</Link>
            <Link to='/'>Sign In</Link>
            <Link className={classes.signup} to='/'>Sign me up</Link>
        </menu>
    )
}