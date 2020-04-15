import React from 'react';
import styles from './ArrowSections.module.css';
import Button from '../../UI/Button/Button';


const arrowSections=(props)=>{
    let sectionClass=[styles.TriangleSection];
    //Arrow Selector
    if(props.triangleUp && props.triangleDown){

        sectionClass=[...sectionClass, styles.TriangleDown, styles.TriangleUp]

    }else if(props.triangleUp && !props.triangleDown){

        sectionClass = [...sectionClass, styles.TriangleUp]

    }else if (!props.triangleUp && props.triangleDown) {

        sectionClass = [...sectionClass, styles.TriangleDown]
    }

    //Color Selector
    const { Black, Yellow, Green,Grey } = styles;
    switch (props.color) {
        case ('yellow'):
            sectionClass =  [...sectionClass, Yellow]
            break
        case ('black'):
            sectionClass = [...sectionClass, Black]
            break
        case ('green'):
            sectionClass =  [...sectionClass, Green]
            break
        case ('grey'):
            sectionClass = [...sectionClass, Grey]
            break
        default: break
    }


    return(
        <section className={sectionClass.join(' ')}>
            <div className={styles.TextAndImage}>
                <h2>{props.title}</h2>
                <img srcSet={props.image} alt='logo-pencil' />
            </div>
            <div className={styles.TextAndButton}>
                <p>{props.paragraph}</p>
                {props.buttonText && <Button  color={props.color}>{props.buttonText}</Button>}
            </div>
        </section>
    )
}

export default arrowSections;