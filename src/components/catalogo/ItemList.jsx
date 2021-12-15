import Item from './Item/Item';
import Grid from '@mui/material/Grid'

const ItemList = ({ products }) =>{
    //console.log("products: ", products) 
    return (
        <div>
            {products.map(product => {
                return(
                <div key={product.id}>
                <Item 
                product = {product}
                />
                </div>
                );
            })}
        </div>

    );
}

export default ItemList;