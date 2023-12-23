import { useEffect, useState } from "react";
import Part from "./Part";

const Content = (props) => {
    // console.log(props.part1.name);
    const partsAndExercises = [
        {
            name: props.part1.name,
            exercise: props.part1.exercises
        },
        {
            name: props.part2.name,
            exercise: props.part2.exercises
        },
        {
            name: props.part3.name,
            exercise: props.part3.exercises
        }
    ];

    return (
        <>
            <Part partsAndExercises={partsAndExercises}/>
        </>
    )
}

export default Content;