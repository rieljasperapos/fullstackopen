import React from "react";

interface StatisticLineProps {
    text: string;
    value: number;
}

const StatisticLine: React.FC<StatisticLineProps> = (props) => {
    console.log(props.value);
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value} {props.text === 'percentage' && '%'}</td>
        </tr>
    );
};

export default StatisticLine;
