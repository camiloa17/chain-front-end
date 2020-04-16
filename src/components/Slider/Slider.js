import React from 'react';
import styles from './Slider.module.css';
import Chain from '../../assets/images/Prototype MIT-first.gif';
import Qroom from '../../assets/images/Qroom.mp4';
import Theorem from '../../assets/images/Theorem.mp4';

const slider = ()=>{

    const clickSlideHandler = slide => {
        const element = slide.target.closest(`.${styles.ProjectCard}`);
        const centerElement = document.querySelector(`.${styles.Center}`);
        if (element.classList.contains(styles.Left)) {
            centerElement.classList.remove(styles.Center);
            centerElement.classList.add(styles.Left);
            element.classList.remove(styles.Left);
            element.classList.add(styles.Center);

        } else if (element.classList.contains(styles.Right)) {

            centerElement.classList.remove(styles.Center);
            centerElement.classList.add(styles.Right);
            element.classList.remove(styles.Right);
            element.classList.add(styles.Center);
        }
        
    }
    return(
        <div className={styles.ProjectSlider}>
            <div id='slide1' className={`${styles.ProjectCard} ${styles.Left}`}>
                <div className={styles.ImageContainer}>
                    <img loading='lazy' onClick={clickSlideHandler} src={Chain} alt='chain' />
                </div>
                <div className={styles.SliderText}>
                    <h2>MIT</h2>
                    <p>The client needed a new platform linked with their website and get total control. The objective of the dashboard was to provide MIT with a space where they could control all the exams, schedules, income of the company and students who will take the exam. User experience Provided them earn more time for each employee, since all internal process was in paper and pen, as ’90 times.</p>
                </div>
            </div>
            <div id='slide2' className={`${styles.ProjectCard} ${styles.Center}`}>
                <div  className={styles.ImageContainer}>
                    <video loading='lazy' onClick={clickSlideHandler} autoPlay loop>
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
            <div id='slide3' className={`${styles.ProjectCard} ${styles.Right}`}>
                <div  className={styles.ImageContainer}>
                    <video loading='lazy' onClick={clickSlideHandler} autoPlay loop>
                        <source src={Theorem}
                            type="video/mp4" />
                    </video>
                </div>
                <div className={styles.SliderText}>
                    <h2>Theorem</h2>
                    <p>The Objective were to show the quality of the product, demonstrate the clients’ feeling before they have used the product and explain how Theorem works in each kind of hair. Having already found the end user or persona, we created the product in 3D, selected the pastels colors and started to tell a story appealing those women who cares for their hair health and beauty.</p>
                </div>
            </div>

        </div>
    )
}


export default slider;