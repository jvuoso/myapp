const Item = ({name, stock, description}) => {
    //
    return (
        <div>
            <h3>{name}</h3>
            <h2>{stock}</h2>
            <h2>{description} </h2>
        </div>
    )
}

export default Item;