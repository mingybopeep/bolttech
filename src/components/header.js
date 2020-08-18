import React from 'react';
import logo from '../assets/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './header.module.scss';

export default function Header() {
    return (
        <header >
            <img src={logo} /> 
            <MenuIcon />
        </header>
    )
}