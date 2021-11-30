import Item from './Item/Item';

const ItemList = ({ products }) =>{
    console.log("products: ", products) 
    return (
        <div>
            {products.map(product => {
                return(
                <Item 
                name = {product.name}
                //description={product.description}
                id = {product.id}
                stock = {product.stock}
                image = {product.image}
                key = {product.id}
                />
                );
            })}
        </div>

    );
}

export default ItemList;