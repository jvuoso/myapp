import Item from './Item/Item';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const ItemList = ({ products }) =>{
    //console.log("products: ", products) 
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {products.map(product => {
                return(
                <Grid item key={product.id} xs={6}>
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