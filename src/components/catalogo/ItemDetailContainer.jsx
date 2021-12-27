import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "items");
        const q = query(itemsCollection, where("id", "==", id ))
        getDocs(q).then( 
          snapshot => {
            var prod=(snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data()} )))
            setProduct(prod[0])
          })
      },[id]); 
   

    return ( 
            <ItemDetail product={product}></ItemDetail>   
            )
};

export default ItemDetailContainer;