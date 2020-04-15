import React, { useState} from 'react';
import styles from './ArrowSectionHidden.module.css';
import Button from '../UI/Button/Button';
import Slider from '../Slider/Slider';
import SalesHidden from '../SalesHidden/SalesHidden';

const ArrowSectionHidden = (props) => {
  const {id ,triangleUp,triangleDown,title,paragraph,buttonText,image,color}=props;

    let sectionClass = [styles.TriangleSection];
    //Arrow Selector
    if (triangleUp && triangleDown) {

        sectionClass = [...sectionClass, styles.TriangleDown, styles.TriangleUp]

    } else if (triangleUp && !triangleDown) {

        sectionClass = [...sectionClass, styles.TriangleUp]

    } else if (!triangleUp && triangleDown) {

        sectionClass = [...sectionClass, styles.TriangleDown]
    }

    //Color Selector
    const { Black, Yellow, Green, Grey } = styles;
    switch (props.color) {
        case ('yellow'):
            sectionClass = [...sectionClass, Yellow]
            break
        case ('black'):
            sectionClass = [...sectionClass, Black]
            break
        case ('green'):
            sectionClass = [...sectionClass, Green]
            break
        case ('grey'):
            sectionClass = [...sectionClass, Grey]
            break
        default: break
    }
    //State of the content
    const [contentShowing, changeContent] = useState({ element: { open: false, height: 0 }});
    
    //EventListener for content showing
    
    const clickButtonHandler = (id) => {
        changeContent(prev => {
            const elementHeight = document.querySelector(`#${id}`).scrollHeight;
            return { ...prev, element: { ...prev.element, open: !prev.element.open, height: !prev.element.open ? elementHeight : 0 } }
        })

    }
    //Content selector
    let hiddenContent;

    if(props.hiddenContent){
        if(props.hiddenContent.slider){
            hiddenContent=<Slider />
        }else if(props.hiddenContent.data){
            hiddenContent=<SalesHidden/>
        }
    }

    return (
        <section id={props.name} className={sectionClass.join(' ')}>
            <div className={styles.VisibleContent}>
                <div className={styles.TextAndImage}>
                    <h2>{title}</h2>
                    <img src={image} alt='logo-pencil' />
                </div>
                <div className={styles.TextAndButton}>
                    <p>{paragraph}</p>
                    {buttonText && <Button clickHandler={()=>clickButtonHandler(id)} buttonType='button' color={color}>{buttonText}</Button>}
                </div>
            </div>
            <div id={id} style={{ height: `${contentShowing.element.height}px` }} className={styles.HiddenContent}>
                {hiddenContent}
            </div>

        </section>
    )
}

export default ArrowSectionHidden;