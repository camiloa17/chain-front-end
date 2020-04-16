import React,{useEffect} from 'react';
import styles from './SalesHidden.module.css'
import Chart from 'chart.js';



const SalesHidden = props => {

    useEffect(()=>{
        const chartElement = document.querySelector('#myChart');
        const data = [5, 5.5, 5 , 6 , 7 ,7.5 ,7.6, 7.8]
        const myChart = new Chart(chartElement, {
            type: 'line',
            data: {
                labels: ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
                datasets: [{
                    label:'CR',
                    data: data,
                    backgroundColor: '#D3DAC6',
                    pointBackgroundColor: '#D3DAC6',
                    fill:false,
                    pointRadius:'5',
                    showLine:true,
                    borderColor:'#EDAC17'
                    
                }]
            },
            options:{
                responsive:true,
                maintainAspectRatio: false,
                legend:{
                    display:false
                },
                title:{
                    display:true,
                    position:'top',
                    fontColor: '#D3DAC6',
                    text:'Conversion Rate 2019-2020',
                    fontSize: '20'
                },
                scales:{
                    xAxes:[{
                        display:true,
                        position:'bottom',
                        gridLines:{display:false},
                        scaleLabel: {
                            display: true,
                            fontColor: '#D3DAC6',
                            labelString: 'Conversion Rate'
                        },
                        ticks:{
                            fontColor: '#D3DAC6'
                        }
                        
                    }],
                    yAxes: [{
                        display: true,
                        type: 'linear',
                        position:'left',
                        gridLines: { display: false},
                        scaleLabel: {
                            display: true,
                            fontColor: '#D3DAC6',
                            labelString: 'Conversion Rate'
                        },
                        ticks:{
                            suggestedMin:4,
                            suggestedMax:8,
                            stepSize:0.5,
                            fontColor:'#D3DAC6',
                            callback: (value)=> {
                                return `${value}%`
                            }
                        },
                        
                    }]
                }
            }
        })
        return ()=> {myChart.destroy()};
    })
    
    return (
        <div className={styles.Chart}>
            <div className={styles.ChartCanvas}>
                <canvas id='myChart'/>
            </div>
            <p>The data gathered in this chart is to show you the results our clients has received during our second month of working with us. We generated and increased in Conversion rate delivering better ROI for each action.</p>
            
        </div>
    )
}

export default SalesHidden;