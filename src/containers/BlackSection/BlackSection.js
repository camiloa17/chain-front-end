import React,{useState,useRef} from 'react';
import styles from './BlackSection.module.css';
import AboutUs from '../../components/AboutUs/AboutUs';
import Button from '../../components/UI/Button/Button';

const BlackSection = () => {

    //State of the content
    const [contentShowing, changeContent] = useState({ element: { open: false, height: 0 } });
    //Ref
    const elementDiv=useRef(null)
    //EventListener for content showing

    const clickButtonHandler = (id) => {
        changeContent(prev => {
            const elementHeight = elementDiv.current.scrollHeight;
            return { ...prev, element: { ...prev.element, open: !prev.element.open, height: !prev.element.open ? elementHeight : 0 } }
        })

    }

    return (
        <section className={styles.Black}>
            <div className={styles.Circle}></div>
            <div className={styles.Content} id='about-us'>
                <div>
                    <h2 className={styles.Text}>Our name comes from all the connections around your system (design, development, digital marketing and data), everything goes together interlocked with each other in a loop iterating each time to become even more robust.</h2>
                    <Button clickHandler={() => clickButtonHandler('blackHidden')} buttonType='button' color={'black'}>About Us</Button>
                </div>
                
            </div>
            <div ref={elementDiv} id='blackHidden' style={{ height: `${contentShowing.element.height}px` }} className={styles.HiddenContent}>
                <AboutUs/>
            </div>
            <div className={styles.Hexagon}>
            </div>
        </section>
    )
}

export default BlackSection;