//import TitleComponent from './title/title';
import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import axios from "axios"


const ItemListContainer = ( {greeting} ) => {

    const [products, setProducts] = useState([])

        const getProductsAxios = async () => {
            const dataAxios = await axios.get("../JSON/products.json");
            const dataProducts = dataAxios.data;
            setProducts(dataProducts)
    } 

     useEffect(() => {
        setTimeout(() => getProductsAxios(), 1000);
    }, []);

    //getProductsAxios()
 
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 345,
                    height: 345,
                    },
             }}>
                <Paper elevation = {0}/>
                <Paper elevation={4}>
                <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
                    { greeting  }
                 </Box>
                
                    <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
                        <ItemList products = {products}></ItemList> 
                    </Box>
                </Paper> 
            </Box>
        );
}
 
export default ItemListContainer;