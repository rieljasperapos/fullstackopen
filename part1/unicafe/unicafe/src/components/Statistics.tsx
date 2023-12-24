import React from "react";

interface StatisticsProps {
    statistics: {
        good: number;
        neutral: number;
        bad: number;
        totalFeedback: number;
        average: number;
        percentage: number;
    };
}

const Statistics: React.FC<StatisticsProps> = (props)  => {
    console.log(props.statistics);
    return (
        <>
            <div>
                <h1>Statistics</h1>
                <p>good {props.statistics.good}</p>
                <p>neutral {props.statistics.neutral}</p>
                <p>bad {props.statistics.bad}</p>
                <p>all {props.statistics.totalFeedback}</p>
                <p>average {props.statistics.average}</p>
                <p>positive {props.statistics.percentage} %</p>
            </div>
        </>
    )
}

export default Statistics;