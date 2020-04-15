import React from 'react';
import HeroTitle from '../UI/HeroTitle/HeroTitle';
import CardSection from '../CardSection/CardSection';
import styles from './UpperSection.module.css';
import Header from '../Navigation/Header/Header';

const upperSection = () => {
    return (
        <div className={styles.Hero}>
            <Header/>
            <section className={styles.Upper}>
                <HeroTitle urlTarget='#contact' buttonText="We are ready. Let's work!">We Hear your Ideas</HeroTitle>
                <CardSection margin={100} />
            </section>
        </div>
    )
}

export default upperSection;