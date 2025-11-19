const List = ({names}) =>{
    return(
        <>
            <ul>
                {names && names.map((name, index) =>(
                        <li key={index}>{name}</li>
                ))}
            </ul>
        </>
    )
}

export default List