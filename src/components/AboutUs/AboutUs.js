import React from 'react';
import styles from './AboutUs.module.css';
import SocialButtons from '../UI/SocialButtons/SocialButtons';
const aboutUs =()=>{
    return(
        <div className={styles.AboutUs}>
            <h2>Chain team</h2>
            <div className={styles.Cards}>
                <div className={styles.Card}>
                    <img src='https://media-exp1.licdn.com/dms/image/C4E03AQHY0LrksuiWUg/profile-displayphoto-shrink_800_800/0?e=1592438400&v=beta&t=heF6cPIeALuro_oMCWmZZ9_cCYEN1ayadJrtgLqmxe8' alt='camilo'></img>
                    <div>
                        <h3>Camilo Dominguez</h3>
                        <p>Camilo is Colombian, is a Specialist in Digital Marketing and Full Stack Web Developer. He is a great and patient professional that always puts work ahead of all his priorities.</p>
                        <SocialButtons linkedinY='https://www.linkedin.com/in/camilodominguez/' website='https://camilodh.com/' />
                    </div>
                </div>
                <div className={`${styles.Card}  ${styles.CardBottom}`}>
                    <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFih3t8b9D6wg/profile-displayphoto-shrink_800_800/0?e=1592438400&v=beta&t=BZaQD8pKPM6mslBOn-F-tik9HflQveyRKEGHZqF6i_I' alt='leticia'></img>
                    <div>
                        <h3>Leticia Serrano</h3>
                        <p>Leticia is Argentinian, is a Specialist in Branding and Product Designer. She is a fast, joyful and enthusiastic worker. She works hard and thorough always looking to deliver the best for each customer as a top-notch graphic designer </p>
                        <SocialButtons linkedinY='https://www.linkedin.com/in/leticiacserrano/' website='https://serranoleticia.com' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutUs;