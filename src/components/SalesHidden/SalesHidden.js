import React from 'react';
import styles from './SalesHidden.module.css'
import chart from '../../assets/images/Sales-curve.png'


const salesHidden = props => {
    return (
        <div className={styles.Chart}>
            <div>
                <img src={chart} alt='sales-chart' />
            </div>
            <p>asda asd asd asd asd</p>
            
        </div>
    )
}

export default salesHidden;