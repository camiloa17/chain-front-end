import React, { useState,useRef} from 'react';
import styles from './ArrowSection.module.css';
import Button from '../../components/UI/Button/Button';
import Slider from '../../components/Slider/Slider';
import SalesHidden from '../../components/SalesHidden/SalesHidden';
import ReactGA from 'react-ga';

const ArrowSection = (props) => {
  const {id ,triangleUp,triangleDown,title,paragraph,buttonText,image,color}=props;
  const elementDiv=useRef(null);

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
        if(!contentShowing.element.open){
            ReactGA.event({
                category: 'View Section',
                action: `${id==='section-2'?'view projects':'view results'}`
            });
        }
        changeContent(prev => {
            const elementHeight = elementDiv.current.scrollHeight;
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
            <div ref={elementDiv} id={id} style={{ height: `${contentShowing.element.height}px` }} className={styles.HiddenContent}>
                {hiddenContent}
            </div>

        </section>
    )
}

export default ArrowSection;