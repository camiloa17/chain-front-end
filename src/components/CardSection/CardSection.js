import React from 'react';
import styles from './CardSection.module.css';
import Card from './Cards/Cards';

const cardSection = props =>{
    return(
        <div style={{ 'marginTop': props.margin }} className={styles.CardSection}>
            <Card>We analyze your needs and customers to create the best design to deliver a successful user experience.</Card>
            <Card>We take your ideas and materialize them with the right tools that will leverage your business to the next level.</Card>
            <Card>Improve your traffic to your website by targeting the right users in the right time using the right message.</Card>
        </div>
    )
}

export default cardSection;