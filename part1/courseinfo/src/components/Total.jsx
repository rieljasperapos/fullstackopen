const Total = (props) => {
    let total = 0;
    props.parts.map(part => {
        console.log(part.exercises)
        total += part.exercises;
    })
    return (
        <>
            <p>Number of exercises {total}</p>
        </>
    )
}

export default Total;