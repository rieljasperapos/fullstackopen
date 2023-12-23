import { useEffect, useState } from "react";
import Part from "./Part";

const Content = (props) => {
    const partsAndExercises = [
        {
            part: props.part1,
            exercise: props.exercises1
        },
        {
            part: props.part2,
            exercise: props.exercises2
        },
        {
            part: props.part3,
            exercise: props.exercises3
        }
    ];

    return (
        <>
            <Part partsAndExercises={partsAndExercises}/>
        </>
    )
}

export default Content;