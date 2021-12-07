import {useState, useEffect} from 'react'
//import ItemList from './ItemList'
//import Paper from '@mui/material/Paper'
//import Box from '@mui/material/Box'
import ItemDetail from './ItemDetail'
//import ItemListContainer from './ItemListContainer'
import { useParams } from "react-router-dom"
// eslint-disable-next-line
import axios from "axios"

const ItemDetailContainer = () => {

        const [product, setProduct] = useState({})
        const {id} = useParams()
        const getProductsAxios = async (id) =>{
    
            await axios.get("../JSON/products.json").then((res)=>{
    
                setProduct(res.data.find((prod) => prod.id === id))
            })
        }
        
        useEffect(() => {
            setTimeout( () => getProductsAxios(id),100)
        },[id]);
        
    
        return ( 
                <ItemDetail product={product}></ItemDetail>   
                )
};

export default ItemDetailContainer;