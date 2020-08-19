import React, {useState} from 'react';
import logo from '../assets/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './header.module.scss';
import Menu from './menu';

export default function Header() {

    const [menu, setMenu] = useState(false);

    let content = null;

    if(menu){
        content = <Menu />
    }


    return (
        <header >
            <img src={logo} className={classes.headerLogo}/> 
            <MenuIcon onClick={()=>setMenu(!menu)} />
            {content}
            <div className={classes.desktopheader}>
                <Menu />
            </div>
        </header>
    )
}