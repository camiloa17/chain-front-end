import React, { useState, useRef } from 'react';
import styles from './BlackSection.module.css';
import AboutUs from '../../components/AboutUs/AboutUs';
import Button from '../../components/UI/Button/Button';
import Design from '../../assets/images/design.svg';
import Develop from '../../assets/images/develop.svg';
import Analysis from '../../assets/images/analysis.svg';
import Marketing from '../../assets/images/marketing.svg';

import ReactGA from 'react-ga';


const BlackSection = () => {

    //State of the content
    const [contentShowing, changeContent] = useState({ element: { open: false, height: 0 } });
    //Ref
    const elementDiv = useRef(null)
    //EventListener for content showing

    const clickButtonHandler = (id) => {
        if (!contentShowing.element.open) {
            // ReactGA.event({
            //     category: 'View Section',
            //     action: 'View About us'
            // });
            document.querySelector(`#${id}`).scrollIntoView();
        }
        changeContent(prev => {
            const elementHeight = elementDiv.current.scrollHeight;
            return { ...prev, element: { ...prev.element, open: !prev.element.open, height: !prev.element.open ? elementHeight : 0 } }
        });



    }

    return (
        <section className={styles.Black}>
            <div className={styles.Circle}></div>
            <div className={styles.Content} id='about-us'>
                <h2 className={styles.Title}>Chain Digital</h2>
                <p className={styles.Text}>Our name comes from all the connections around your system (design, development, digital marketing and data), everything goes together interlocked with each other in a loop iterating each time to become even more robust.</p>
                <div className={styles.Icons}>
                    <div className={styles.Icon}>
                        <img src={Design} alt='' />
                        <h2>UX/UI Design</h2>
                    </div>
                    <div className={styles.Icon}>
                        <img src={Develop} alt='' />
                        <h2>Web Development</h2>
                    </div>
                    <div className={styles.Icon}>
                        <img src={Marketing} alt='' />
                        <h2>Digital Marketing</h2>
                    </div>
                    <div className={styles.Icon}>
                        <img src={Analysis} alt='' />
                        <h2>Data analysis</h2>
                    </div>
                </div>
                <Button clickHandler={() => clickButtonHandler('blackHidden')} buttonType='button' color={'black'}>About Us</Button>
            </div>
            <div ref={elementDiv} id='blackHidden' style={{ height: `${contentShowing.element.height}px` }} className={styles.HiddenContent}>
                <AboutUs />
            </div>
            <div className={styles.Hexagon}>
            </div>
        </section>
    )
}

export default BlackSection;