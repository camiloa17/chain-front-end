import React from 'react';
import styles from './BurgerIcon.module.css';

const burgerIcon = props =>{
    const { BurgerContainer, BurgerTop, BurgerBottom, BurgerMiddle,Active}=styles;

    let container = BurgerContainer;
    let classesTop=BurgerTop;
    let classesMiddle=BurgerMiddle;
    let classesBottom= BurgerBottom;

    if (props.menuStatus.open){
        container =`${BurgerContainer} ${Active}`
        classesTop= `${BurgerTop} ${Active}`;
        classesMiddle = `${BurgerMiddle} ${Active}`;
        classesBottom = `${BurgerBottom} ${Active}`;
    }

    return(
        <div className={container} onClick={props.click}>
            <div className={classesTop}></div>
            <div className={classesMiddle}></div>
            <div className={classesBottom}></div>
        </div>
    )
}

export default burgerIcon;