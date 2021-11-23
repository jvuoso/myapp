import Item from './Item';
const ItemList = ({products, items}) =>{
    console.log("products: ", products) 
    return (
        <div>
            {products.map(product => {
                return(
                <Item 
                name = {product.name}
                description={product.description}
                key = {product.id}
                stock = {product.stock}
                />
                );
            })}
        </div>

    );
}

export default ItemList;