import TitleComponent from './title/title';
//import ItemCount from './ItemCount'
import MyCard from './mycard/mycard';
import {useState, useEffect} from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

    const data = [
        {
            "name": 'Item1',
            "description": "First element",
            "id": "1",
            "stock": "5"
        },
        { 
            "name": 'Item2',
            "description": "First element",
            "id": "2",
            "stock": "3"
        },
        { 
            "name": 'Item3',
            "description": "First element",
            "id": "3",
            "stock": "10"
        },
        { 
            "name": 'Item4',
            "description": "First element",
            "id": "4",
            "stock": "1"
        }
    ]; 

    const [products, setProducts] = useState([])
    console.log('Los productos en el hook son', products)

    useEffect(() => {
        handPromise 
        .then (res => {
            setProducts(res)
        })
        .catch(err => alert('Estamos al aire', err))
    }, []);

    const handPromise = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data)
            reject('Algo paso')
        }, 2000)
    })

        return (
            <div>
                <TitleComponent name={"Martin"} lastName={"Palermo"}/>   
                <MyCard/>
                {/* <ItemCount stock="8" initial="2" /> */}
                <ItemList products = {products}></ItemList>
            </div>
        );
}
 
export default ItemListContainer;