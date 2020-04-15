import React,{useState} from 'react';
import Squares from '../../containers/Home/Squares/Squares';
import styles from './BlackSection.module.css';
import SocialButtons from '../UI/SocialButtons/SocialButtons';
import Button from '../UI/Button/Button';

const BlackSection = () => {

    //State of the content
    const [contentShowing, changeContent] = useState({ element: { open: false, height: 0 } });
   
    //EventListener for content showing

    const clickButtonHandler = (id) => {
        changeContent(prev => {
            const elementHeight = document.querySelector(`#${id}`).scrollHeight;
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
                
                <Squares />
            </div>
            <div id='blackHidden' style={{ height: `${contentShowing.element.height}px` }} className={styles.HiddenContent}>
                <div className={styles.AboutUs}>
                    <h2>About Us</h2>
                    <div className={styles.Cards}>
                        <div className={styles.Card}>
                            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQHY0LrksuiWUg/profile-displayphoto-shrink_800_800/0?e=1592438400&v=beta&t=heF6cPIeALuro_oMCWmZZ9_cCYEN1ayadJrtgLqmxe8' alt='camilo'></img>
                            <div>
                                <h3>Camilo Dominguez</h3>
                                <p>Colombian, specialist in digital marketing and full stack web development. He is a great profesional who always looks to deliver the best products</p>
                                <SocialButtons linkedinY='https://www.linkedin.com/in/camilodominguez/' website='https://camilodh.com/' />
                            </div>
                        </div>
                        <div className={`${styles.Card}  ${styles.CardBottom}`}>
                            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFih3t8b9D6wg/profile-displayphoto-shrink_800_800/0?e=1592438400&v=beta&t=BZaQD8pKPM6mslBOn-F-tik9HflQveyRKEGHZqF6i_I' alt='leticia'></img>
                            <div>
                                <h3>Leticia Serrano</h3>
                                <p>Colombian, specialist in digital marketing and full stack web development. He is a great profesional who always looks to deliver the best products</p>
                                <SocialButtons linkedinY='https://www.linkedin.com/in/leticiacserrano/' website='https://serranoleticia.com'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Hexagon}>
            </div>
        </section>
    )
}

export default BlackSection;