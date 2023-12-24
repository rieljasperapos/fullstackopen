import React from "react";

interface StatisticLineProps {
    text: string,
    value: number
};

const StatisticLine: React.FC<StatisticLineProps> = (props) => {
    return (
        <div>
            <p>{props.text} {props.value}</p>
            
        </div>
    )
}

export default StatisticLine;