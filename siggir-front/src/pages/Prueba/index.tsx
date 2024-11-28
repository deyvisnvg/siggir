
import { Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
/* import 'chart.js'; */

Chart.register(...registerables, annotationPlugin);

const RiskChart = () => {
    const data = {
        datasets: [
            {
                label: 'Riesgo Moderado',
                data: [
                    { x: 1.75, y: 3.25 },
                    { x: 2.49, y: 4.0 },
                    { x: 2.50, y: 3.25 },
                    { x: 3.24, y: 4.0 }
                ],
                backgroundColor: 'rgba(255, 165, 0, 0.5)' // Naranja con opacidad
            }
        ]
    };

    const options: any = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: 0,
                max: 4,
                title: {
                    display: true,
                    text: 'Beneficio'
                }
            },
            y: {
                min: 0,
                max: 4,
                title: {
                    display: true,
                    text: 'Viabilidad'
                }
            }
        },
        plugins: {
            annotation: {
                annotations: {
                    box1: {
                        type: 'box',
                        xMin: 1.75,
                        xMax: 2.49,
                        yMin: 3.25,
                        yMax: 4.0,
                        backgroundColor: 'rgba(255, 165, 0, 0.25)',
                        borderColor: 'orange',
                        borderWidth: 1,
                        label: { content: 'Moderado 1ss', enabled: true, position: 'center' }
                    },
                    box2: {
                        type: 'box',
                        xMin: 2.50,
                        xMax: 3.24,
                        yMin: 3.25,
                        yMax: 4.0,
                        backgroundColor: 'rgb(255, 0, 0)',
                        borderColor: 'red',
                        borderWidth: 1,
                        label: { content: 'Moderado 1dff', enabled: true, position: 'center' }
                    },
                    label1: {
                        type: 'label',
                        xValue: (1.75 + 2.49) / 2,  // Centro del primer box
                        yValue: (3.25 + 4.0) / 2,   // Centro del primer box
                        content: '1',
                        enabled: true,
                        position: 'center',
                        font: {
                            size: 16
                        }
                    },
                    label2: {
                        type: 'label',
                        xValue: (2.5 + 3.24) / 2,   // Centro del segundo box
                        yValue: (3.25 + 4.0) / 2,   // Centro del segundo box
                        content: '8',
                        enabled: true,
                        position: 'center',
                        font: {
                            size: 16
                        }
                    }
                }
            }
        }
    };

    return <Scatter data={data} options={options} />;
};

 export default RiskChart;


/*

import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import 'chart.js/auto';

Chart.register(...registerables, annotationPlugin);

const RiskChart = () => {
    const data = {
        datasets: [
            {
                label: 'Riesgo Moderado',
                data: [
                    { x: 1.75, y: 3.25 },
                    { x: 2.49, y: 4.0 },
                    { x: 2.50, y: 3.25 },
                    { x: 3.24, y: 4.0 },
                    { x: 2.0, y: 3.5 }
                ],
                backgroundColor: 'rgba(255, 165, 0, 0.5)' // Naranja con opacidad
            }
        ]
    };

    const options = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: 0,
                max: 10,
                title: {
                    display: true,
                    text: 'Beneficio'
                }
            },
            y: {
                min: 0,
                max: 10,
                title: {
                    display: true,
                    text: 'Viabilidad'
                }
            }
        },
        plugins: {
            annotation: {
                annotations: {
                    box1: {
                        type: 'box',
                        xMin: 1.75,
                        xMax: 2.49,
                        yMin: 3.25,
                        yMax: 4.0,
                        backgroundColor: 'rgba(255, 165, 0, 0.25)',
                        borderColor: 'orange',
                        borderWidth: 2
                    },
                    box2: {
                        type: 'box',
                        xMin: 2.5,
                        xMax: 3.24,
                        yMin: 3.25,
                        yMax: 4.0,
                        backgroundColor: 'rgba(255, 165, 0, 0.25)',
                        borderColor: 'orange',
                        borderWidth: 2
                    },
                    
                }
            }
        }
    };

    return <Scatter data={data} options={options} />;
};

export default RiskChart;
 */