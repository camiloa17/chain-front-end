import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems=(props)=>{
    let containerClass = styles.NavContainer;
    
    if(props.menuStatus.open){
        containerClass=`${styles.NavContainer} ${styles.Active}`;
    }
    return(
        <nav className={containerClass}>
            <ul className={styles.Nav}>
                <NavigationItem click={props.click} link='#about-us'>About Us</NavigationItem>
                <NavigationItem click={props.click} link='#development'>Projects</NavigationItem>
                <NavigationItem click={props.click} link='#digital-marketing'>Results</NavigationItem>
                <NavigationItem click={props.click} link='#contact'>Contact</NavigationItem>
            </ul> 
        </nav>
    )
}

export default navigationItems;