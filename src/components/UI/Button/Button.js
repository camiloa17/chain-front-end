import React from 'react';
import styles from './Button.module.css';

const bottom= props =>{
    const {Black,Yellow,Green,Grey}=styles;
    let classSelected;

    switch(props.color){
        case('yellow'):
        classSelected=Yellow
        break
        case('black'):
        classSelected=Black
        break
        case('green'):
        classSelected=Green;
        break
        case ('grey'):
            classSelected = Grey;
            break
        default: break
    }
    let buttonHtml;
    if(props.buttonType==='button'){
        buttonHtml = (<button onClick={props.clickHandler} className={`${styles.Button} ${classSelected}`}>
            {props.children}
        </button>)
    }else if(props.buttonType==='a'){
        buttonHtml = (<a href={props.urlTarget} className={`${styles.Button} ${classSelected}`}>
            {props.children}
        </a>)
    }

    return (<>
            {buttonHtml}
            </>)
}

export default bottom;