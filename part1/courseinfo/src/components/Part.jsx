const Part = (props) => {
    return (
        <>
            {props.partsAndExercises.parts.map((part, indx) => (
                <p key={indx}>{part.name} {part.exercises}</p>
            ))}
        </>
    )
}

export default Part;