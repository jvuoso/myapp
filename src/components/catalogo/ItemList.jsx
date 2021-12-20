import Item from './Item/Item';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const ItemList = ({ products }) =>{
    //console.log("products: ", products)
    if (products.length >1) {}
    return (
        <Box sx={{ width: '100%', height: '100%'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {products.map(product => {
                return(
              <Grid item key={product.id}>{/* 2,4,3 */}
                <Item 
                product = {product}
                />
                </Grid>
                );
            })}
            </Grid>
        </Box>
        

    );
}

export default ItemList;