import React from 'react';
import styles from './NavigationItem.module.css';

const navigationItem = props => (
    <li className={styles.NavList}>
        <a onClick={props.click} href={props.link}>{props.children}</a>
        <hr/>
    </li>
);

export default navigationItem;