import Item from './Item/Item';

const ItemList = ({products}) =>{
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
                image = {product.image}
                />
                );
            })}
        </div>

    );
}

export default ItemList;