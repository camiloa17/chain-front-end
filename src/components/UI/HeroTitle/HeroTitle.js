import React, { useEffect,useRef } from 'react';
import Button from '../Button/Button';
import styles from './HeroTitle.module.css';

const HeroTitle = props => {
    const words = ['We hear your ideas.', 'We develop your dreams.', 'We improve with data.'];
    const changElement=useRef(null)
    let step=0;
    let oldWord='';
    let element;
    const ua = navigator.userAgent;
    const browserTest = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)

    useEffect(() => {
        if (!browserTest){
            setTimeout(changeWord, 1000);
        }
        
    })


    const changeWord = () => {
        element = changElement.current;
        oldWord=element.innerText;
        if (oldWord.length < 1) {
            if (step < words.length - 1){
                step++
            } else {
                step=0;
            }
            addNextWord();
        } else {
            setTimeout(deleteWord, 800);
        }
    }

    const addNextWord = () => {
        element = changElement.current;
        const currentWord = element.innerText;
        const nextWord = words[step];
        if (currentWord.length === nextWord.length) {
            changeWord();
            return;
        }
        element.innerText = nextWord.substring(0, currentWord.length+1);
        setTimeout(addNextWord, 100);
    }

    const deleteWord = () => {
        element = changElement.current;
        //Adds a new word since it is deleted
        const currentWord = element.innerText;

        if (currentWord.length === 0) {
            changeWord();
            return;
        }
        //Remove character
        element.innerText=currentWord.substring(0,currentWord.length-1);
        setTimeout(deleteWord, 100);
    }

    return (
        <div className={styles.Hero}>
            <h2 ref={changElement} className={styles.ChangingWord}>{browserTest?'We want to design and develop your ideas':words[0]}</h2>
            <p>You are one click away from getting your website or mobile app</p>
            <Button color='black' buttonType='a' urlTarget={props.urlTarget} >{props.buttonText}</Button>
        </div>
    )
}

export default HeroTitle;