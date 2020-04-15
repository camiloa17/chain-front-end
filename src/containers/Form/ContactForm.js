import React, {useState} from 'react';
import styles from './ContactForm.module.css';
import Button from '../../components/UI/Button/Button';

const ContactForm = props =>{
    const [fullName,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');


    function changeName (event){
        setName(event.target.value);
    }

    function changeEmail(event) {
        setEmail(event.target.value);
    }

    function changeMessage(event) {
        setMessage(event.target.value);
    }
    
    

    return(
        <form>
            <input className={styles.Input} type='text' placeholder='Full name' onChange={changeName} value={fullName} />
            <input className={styles.Input} type='email' placeholder='Email' onChange={changeEmail} value={email} />
            <textarea className={styles.Input} placeholder='Message' spellCheck={"true"} onChange={changeMessage} value={message} />
            <Button 
                color='black'
                buttonType='button'
            >Send</Button>
        </form>
    )

}

export default ContactForm;    