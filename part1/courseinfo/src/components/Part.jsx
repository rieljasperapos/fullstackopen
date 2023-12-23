const Part = (props) => {
    return (
        <>
            {props.partsAndExercises.map(p => (
                <p>{p.part} {p.exercise}</p>
            ))}
        </>
    )
}

export default Part;