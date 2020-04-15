import React from 'react';
import styles from './Footer.module.css';
import SocialButtons from '../UI/SocialButtons/SocialButtons';
import ContactForm from '../../containers/Form/ContactForm';


const footer =()=>{

    return (
        <footer className={styles.Footer}>
            <div id='contact'>
                <h2>Let's talk</h2>
                <p>Burnaby, BC, Canada</p>
                <p>+1 604-356-4359</p>
                <p>contact@chainmarketingdigital.com</p>
                <SocialButtons facebook='/' linkedin='/' whatsapp='https://web.whatsapp.com/send?phone=16043564177&text=I Would love to speak with you!' />
            </div>
            <ContactForm/>
        </footer>
    )
}

export default footer;