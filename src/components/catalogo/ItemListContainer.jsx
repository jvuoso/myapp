//import TitleComponent from './title/title';
import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import axios from "axios"
import { useParams } from "react-router-dom"
import { useCart } from '../../contexts/CartContext'

export var dataAxios = []

const ItemListContainer = ( {greeting} ) => {

    const [products, setProducts] = useState([])
    const {cat} = useParams()
    const products2 = []
    const {setReady} = useCart();

    

        const getProductsAxios = async () => {
            const dataAxios = await axios.get("../JSON/products.json");
            const dataProducts = dataAxios.data;
            setProducts(dataProducts)
    } 

     useEffect(() => {
        setReady(false)
        setTimeout(() => getProductsAxios(), 1000);
    }, []);

    if (cat) {   
        for (let product of products) {
            if (product.category === cat) {
                products2.push(product)
            }
        }
    }

    if ( !products2.length) {
        for (let product of products){
            products2.push(product)
        }
    }

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
                {/* <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}> */}
                   <h1>{greeting} {cat}</h1> 
                 {/* </Box> */}
                    <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
                        <ItemList products = {products2}></ItemList> 
                    </Box>
                </Paper> 
            </Box>
        );
}
 
export default ItemListContainer;