import React, {useState} from 'react';
import styles from './Header.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Burger from '../../UI/BurgerIcon/BurgerIcon';

const Header = () => {
    const [openMenu,setMenuState]=useState({open:false});

   const burgerClickHandler=()=>{
       const screen=window.screen.width;
       if(screen<=998){
           setMenuState(prev => { return { open: !prev.open } })
       }
        
    }
    return (
        <header className={styles.Header}>
            <Logo />
            <NavigationItems click={burgerClickHandler} menuStatus={openMenu} />
            <Burger menuStatus={openMenu} click={burgerClickHandler} />
        </header>
    )
}

export default Header;