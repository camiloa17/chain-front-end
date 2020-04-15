import React from 'react';
import styles from './Slider.module.css';
import Chain from '../../assets/images/Prototype MIT-first.gif';
import Qroom from '../../assets/images/QROOM video.mp4';
import Theorem from '../../assets/images/theorem.mp4';

const slider = props=>{

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
                    <img onClick={clickSlideHandler} src={Chain} alt='chain' />
                </div>
                <div className={styles.SliderText}>
                    <h2>MIT Dashboard1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div id='slide2' className={`${styles.ProjectCard} ${styles.Center}`}>
                <div  className={styles.ImageContainer}>
                    <video onClick={clickSlideHandler} autoPlay loop>
                        <source src={Qroom}
                            type="video/mp4"/>
                    </video>
                </div>
                <div className={styles.SliderText}>
                    <h2>MIT Dashboard2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div id='slide3' className={`${styles.ProjectCard} ${styles.Right}`}>
                <div className={styles.ImageContainer}>
                    <video onClick={clickSlideHandler} autoPlay loop>
                        <source src={Theorem}
                            type="video/mp4" />
                    </video>
                </div>
                <div className={styles.SliderText}>
                    <h2>MIT Dashboard3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

        </div>
    )
}


export default slider;