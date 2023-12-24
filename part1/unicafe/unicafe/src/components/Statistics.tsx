import React from "react";
import StatisticLine from "./StatisticLine";

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
                <StatisticLine text='good' value={props.statistics.good} />
                <StatisticLine text='neutral' value={props.statistics.neutral} />
                <StatisticLine text='bad' value={props.statistics.bad} />
                <StatisticLine text='all' value={props.statistics.totalFeedback} />
                <StatisticLine text='average' value={props.statistics.average} />
                <StatisticLine text='percentage' value={props.statistics.percentage} />
            </div>
        </>
    )
}

export default Statistics;