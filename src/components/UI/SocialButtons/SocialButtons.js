import React from 'react';
import Facebook from '../../../assets/images/facebook.svg';
import LinkedIn from '../../../assets/images/Linkedin.svg';
import LinkedInY from '../../../assets/images/Linkedin-2.svg'
import Whatsapp from '../../../assets/images/whatsapp.svg';
import Website from '../../../assets/images/Icon-website.svg';
import styles from './SocialButtons.module.css';

const socialButtons = props => {

    return (
        <div className={styles.Icons}>
            {props.facebook &&
                <a href={props.facebook} target='_blank rel="noopener noreferrer"'>
                    <img src={Facebook} alt='facebook-icon' />
                </a>}
            {props.linkedin &&
                <a href={props.linkedin} target='_blank rel="noopener noreferrer"'>
                    <img src={LinkedIn} alt='Linkedin-icon' />
                </a>}
            {props.whatsapp &&
                <a href={props.whatsapp} target='_blank rel="noopener noreferrer"'>
                    <img src={Whatsapp} alt='Whatsapp-icon' />
                </a>}
            {props.linkedinY && <a href={props.linkedinY} target='_blank rel="noopener noreferrer"'>
                <img src={LinkedInY} alt='Linkedin-icon' />
            </a>}
            {props.website && <a href={props.website} target='_blank rel="noopener noreferrer"'>
                <img src={Website} alt='Linkedin-icon' />
            </a>}
        </div>
    )
}

export default socialButtons;