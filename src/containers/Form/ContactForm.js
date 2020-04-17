import React, {useState} from 'react';
import styles from './ContactForm.module.css';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';
import ReactGA from 'react-ga';

const ContactForm = props =>{
    const [fullName,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const [sending,setSending]=useState({sending:false,sent:false,error:false});


    function changeName (event){
        setName(event.target.value);
    }

    function changeEmail(event) {
        setEmail(event.target.value);
    }

    function changeMessage(event) {
        setMessage(event.target.value);
    }

    async function submit(event){
        try{
        event.preventDefault();
        setSending(prev=>{return{...prev,sending:true}});
       const payload= await axios.post('/api/mail',{
            fullName:fullName,
            email:email,
            message:message
        });
        if(payload){
            
            if(payload.status===200){
                
                ReactGA.event({
                    category: 'Form Sent',
                    action: 'Form sent succesfull'
                });
                setSending({ sent: true, sending: false, error: false })
            }else if(payload.status!==200){
                
                ReactGA.event({
                    category: 'Form Sent',
                    action: 'Form not sent'
                });
                setSending({ sent: true, sending: false, error: true })
            }
            
        }
    }catch(error){
            ReactGA.event({
                category: 'Form Sent',
                action: 'Form error'
            });
            setSending({ sent: false, sending: false, error: true });
            
            
    }
    
    }

    let formMessage;
    if(sending.sent){
        if(sending.sent && sending.error){
            formMessage = (<p><span role="img" aria-label="Emoji sad">😓</span>Ohh Something went wrong with the server, try again</p>)
        }else if(sending.sent && !sending.error){
            formMessage = (<p><span role="img" aria-label="Emoji with sunn-glasses">😎</span>Message Sent!</p>)
        
        }
    } else if (!sending.sent && sending.error) {
        formMessage = (<p><span role="img" aria-label="emoji sad">😓</span>It seems it was not possible to send the message, try again</p>)
    }
    
    

    return(
        <form onSubmit={submit}>
            <input htmlFor='full-name' className={styles.Input} type='text' placeholder='Full name' onChange={changeName} value={fullName} aria-label="Full-name" />
            <input id='email-input' className={styles.Input} type='email' placeholder='Email' onChange={changeEmail} value={email} aria-label="Email" />
            <textarea id='message-box' className={styles.Input} placeholder='Message' spellCheck={"true"} onChange={changeMessage} value={message} aria-label="Message" />
            <Button 
                color='black'
                buttonType='button'
            >{sending.sending ? <Spinner/>:'Send'}</Button>
            {formMessage}
        </form>
    )

}

export default ContactForm;    