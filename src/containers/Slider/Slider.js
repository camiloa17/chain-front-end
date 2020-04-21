import React,{useState} from 'react';
import styles from './Slider.module.css';
import Chain from '../../assets/images/Prototype MIT-first.gif';
import Qroom from '../../assets/images/Qroom.mp4';
import Theorem from '../../assets/images/Theorem.mp4';

const Slider = ()=>{
    const positionClasses =[styles.Center,styles.Left,styles.Right]
    const[slidePosition,setSlidePosition]= useState(
        {
            slide1:{position:0,class:positionClasses[0]},
            slide2:{position:1,class:positionClasses[1]},
            slide3:{position:2,class:positionClasses[2]}
        });
    
    const clickSlideHandler = arrow => {
        const arrowId = arrow.target.id;
        const prevSlidePosition ={...slidePosition};

            for(const slide in prevSlidePosition){
                let actualPosition = prevSlidePosition[slide].position;
    
                if(actualPosition===0 && arrowId==='leftArrow'){

                    prevSlidePosition[slide]={position:2,class:positionClasses[2]}

                } else if (actualPosition === 2 && arrowId === 'rightArrow'){

                    prevSlidePosition[slide] = { position: 0, class: positionClasses[0] }

                }else{
                    
                    const newPositions = arrowId === 'leftArrow' ? actualPosition - 1 : actualPosition + 1;
                    prevSlidePosition[slide] = { position: newPositions, class: positionClasses[newPositions]}
                }
            }
          return  setSlidePosition(prevSlidePosition)
        
    }
    return(
        <div className={styles.ProjectSlider}>
            <span id='leftArrow' className={styles.LeftArrow} onClick={clickSlideHandler}></span>

            <div id='slide1' className={`${styles.ProjectCard} ${slidePosition.slide1.class}`}>
                <div className={styles.ImageContainer}>
                    <img  src={Chain} alt='chain' />
                </div>
                <div className={styles.SliderText}>
                    <h2>MIT</h2>
                    <p>The client needed a new platform linked with their website and get total control. The objective of the dashboard was to provide MIT with a space where they could control all the exams, schedules, income of the company and students who will take the exam. User experience Provided them earn more time for each employee, since all internal process was in paper and pen, as ’90 times.</p>
                </div>
            </div>
            <div id='slide2' className={`${styles.ProjectCard} ${slidePosition.slide2.class}`}>
                <div  className={styles.ImageContainer}>
                    <video loading='lazy' controls>
                        <source src={Qroom}
                            type="video/mp4"/>
                    </video>
                </div>
                <div className={styles.SliderText}>
                    <h2>Qroom</h2>
                    <p>The client's goal was literally a "Killer" website, with the best three projects shows their powerful, as well as functionalities and Technology used.
                    The website concept came from their features, fast environment and effectiveness work. Strategically, the style took shape from the brand most known as fast and elegancy, Ferrari.</p>
                </div>
            </div>
            <div id='slide3' className={`${styles.ProjectCard} ${slidePosition.slide3.class}`}>
                <div  className={styles.ImageContainer}>
                    <video loading='lazy' controls>
                        <source src={Theorem}
                            type="video/mp4" />
                    </video>
                </div>
                <div className={styles.SliderText}>
                    <h2>Theorem</h2>
                    <p>The Objective were to show the quality of the product, demonstrate the clients’ feeling before they have used the product and explain how Theorem works in each kind of hair. Having already found the end user or persona, we created the product in 3D, selected the pastels colors and started to tell a story appealing those women who cares for their hair health and beauty.</p>
                </div>
            </div>

            <span id='rightArrow' className={styles.RightArrow} onClick={clickSlideHandler} ></span>
        </div>
    )
}


export default Slider;