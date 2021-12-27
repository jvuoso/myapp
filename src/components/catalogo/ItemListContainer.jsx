import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useParams } from "react-router-dom"
import { useCart } from '../../contexts/CartContext'
import {getFirestore, collection, getDocs} from "firebase/firestore"

export var dataAxios = []

const ItemListContainer = ( {greeting} ) => {

    const [products, setProducts] = useState([])
    const {cat} = useParams()
    const products2 = []
    const {setReady} = useCart();

    useEffect (() => {
        setReady(false)
        const db = getFirestore();
        const itemsCollection = collection (db, "items");
        getDocs(itemsCollection).then( 
          snapshot => {
            setProducts(snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data()} )))
          })
        
      },[]);


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
            <Box sx={{ width: '100%', height: '100%'}}>
                   
                <Grid container spacing={6} direction="column" justifyContent="space-between" alignItems="center"> 
                   <Grid item xs={6}>
                        <h1>{greeting} {cat}</h1>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <ItemList products = {products2}></ItemList> 
                    </Grid>
                    </Grid>
            </Box>        
        );
}
 
export default ItemListContainer;