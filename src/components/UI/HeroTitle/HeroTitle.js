import React from 'react';
import Button from '../Button/Button';
import styles from './HeroTitle.module.css';

const heroTitle =props=>{
    return(
        <div className = { styles.Hero }>
            <h2>{props.children}</h2>
            <Button color='black' buttonType='a' urlTarget={props.urlTarget} >{props.buttonText}</Button>
        </div>
    )
}

export default heroTitle;