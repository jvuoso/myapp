import TitleComponent from './title/title';
import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'


const ItemListContainer = ({greeting}) => {

    const data = [
        {
            "name": 'Paella',
            "description": "La paella es quizá el platillo de origen español más conocido en el mundo y recibe su nombre por la gran sartén en la que se cocina. Se originó entre los siglos XV y XVI cerca del lago Albufera en Valencia, España, como un alimento de campesinos y pastores",
            "id": "1",
            "stock": "5",
            "image": "https://www.bing.com/th?id=AMMS_24d7d653b1793a0c5a9680086478e82d&w=459&h=459&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1"
        },
        { 
            "name": 'Asado',
            "description": "El asado, barbacoa, parrilla o parrillada es una técnica de cocción mediante la cual, los alimentos (generalmente cortes de carne) son expuestos al calor de fuego o brasas para que se cocinen lentamente.",
            "id": "2",
            "stock": "5",
            "image": "https://th.bing.com/th/id/R.3113e91ae80790d0b1f30ba4c7e2ba9b?rik=fPc2u%2fMfPVd75A&riu=http%3a%2f%2fflavorverse.com%2fwp-content%2fuploads%2f2017%2f11%2fAsado-Argentino-Barbecued-Traditional-Argentine-Food.jpg&ehk=TDQe7OGsBtBbNyeejfrRA5X8alXpdMcnbwkpjSXbIUY%3d&risl=&pid=ImgRaw&r=0"
        },
        { 
            "name": 'Ravioles',
            "description": "Ravioli (del italiano raviolo, plural ravioli, del genovés raviolo, ‘plegado’) es el nombre de un tipo de pasta italiana rellena con diferentes ingredientes, generalmente replegada en forma cuadrada.",
            "id": "3",
            "stock": "5",
            "image": "https://th.bing.com/th/id/R.11f6571f69e68c8b6d9998579772e7cd?rik=IkxOQUV8Le8Ifg&pid=ImgRaw&r=0"
        },
        { 
            "name": 'Pizza',
            "description": "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal que tradicionalmente se cubre con salsa de tomate y queso y se hornea a alta temperatura en un horno de leña.",
            "id": "4",
            "stock": "3",
            "image": "https://th.bing.com/th/id/R.9348dfa939697eacc7d74320ca7f02ad?rik=rHJXXAAs3Qy4pg&pid=ImgRaw&r=0"
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
                <TitleComponent name={"Juan"} lastName={"Ignacio"}/>
                <Paper elevation={4}>
                    <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
                        <ItemList products = {products}></ItemList> 
                    </Box>
                </Paper> 
            </Box>
        );
}
 
export default ItemListContainer;