import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';

export default function Layout(props){
    return(
    <>
        <Header />
            {props.children}
        <Footer />
    </>
    )
}