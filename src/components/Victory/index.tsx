import React from "react";
import { VictoryChart, VictoryBar } from "victory";

const HistogramVictory = () => {
    const data = [
        { x: 1, y: 5 },
        { x: 2, y: 10 },
        { x: 3, y: 15 },
        { x: 4, y: 20 },
        { x: 5, y: 25 },
    ];
    return (
        <VictoryChart>
            <VictoryBar data={data} />
        </VictoryChart>
    );
}

export default HistogramVictory;
