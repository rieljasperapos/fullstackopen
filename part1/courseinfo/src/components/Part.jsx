const Part = (props) => {
    return (
        <>
            {props.partsAndExercises.map((part, indx) => (
                <p key={indx}>{part.name} {part.exercise}</p>
            ))}
        </>
    )
}

export default Part;