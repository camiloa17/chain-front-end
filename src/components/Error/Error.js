import React from 'react';
import styles from './Error.module.css';
import Button from '../UI/Button/Button';

const error=()=>{
    return(
        <div className={styles.PageBackground}>
            <h1>404</h1>
            <p>Oops! Something went wrong.</p>
            <Button color='black' buttonType='a' urlTarget='/' >Go Home</Button>
        </div>
    )
}

export default error;