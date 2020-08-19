import React from 'react';
import {Link} from 'gatsby';

export default function Menu(){
    return(
        <menu>
            <Link to='/features'>Features</Link>
            <Link to='/FAQS'>FAQS</Link>
            <Link to='/allblogs'>Blog</Link>
            <Link to='/'>Documentation</Link>
            <Link to='/claims'>Make a Claim</Link>
            <Link to='/'>Sign In</Link>
        </menu>
    )
}