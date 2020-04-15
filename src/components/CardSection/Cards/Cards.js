import React from 'react';
import styles from './Cards.module.css';

const card = props=>{
    return(
        <div className = { styles.Cards } >
            <hr />
            <p>{props.children}</p>
            </div>
        )
}

export default card;