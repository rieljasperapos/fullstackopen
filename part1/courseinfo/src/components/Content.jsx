import { useEffect, useState } from "react";
import Part from "./Part";

const Content = (props) => {
    console.log(props);
    return (
        <>
            <Part partsAndExercises={props}/>
        </>
    )
}

export default Content;