import React,{useState} from 'react';
import styles from './Squares.module.css';

const Squares =()=>{
    const [squarePosition, setPosition] = useState([
        { id: 1, clicked: false, top: styles.First, class: styles.OrangeSquare },
        { id: 2, clicked: false, top: styles.Second, class: styles.GreenSquare },
        { id: 3, clicked: false, top: styles.Third, class: styles.GreySquare },
        { id: 4, clicked: false, top: styles.Fourth, class: styles.DarkGreenSquare }
    ]);

    const onClickSquare = (id) => {
        setPosition(prev => {
            const array = [];
            const element = { 1: styles.First, 2: styles.Second, 3: styles.Third, 4: styles.Fourth };
            for (const square of prev) {
                if (square.id === id) {
                    if (square.clicked) {
                        array.push({ ...square, clicked: false, top: element[id] });
                    }
                    else {
                        array.push({ ...square, clicked: true, top: styles.Highest });
                    }

                } else if (square.top === styles.Highest) {
                    array.push({ ...square, clicked: false, top: element[square.id] });
                } else {
                    array.push({ ...square })
                }
            }
            return array;
        });

    }

    return(
                <div className={styles.SquareSection}>
                    {squarePosition.map(element => <div  key={element.id} onClick={() => onClickSquare(element.id)} className={`${styles.Square} ${element.class} ${element.top}`} />)}

                </div>
        
    )
}

export default Squares;