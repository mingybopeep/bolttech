import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);



export default function Layout(props){
    return(
    <>
        <Header />
           
            {props.children}
           
        <Footer />
    </>
    )
}