import { useState } from 'react';
import TitleComponent from './title/title';
import MyCard from './mycard/mycard';
//import { render } from '@testing-library/react';
//import ClickableComponent from '../clickable/clickable';
//var moment = require('moment');

const Catalogo = (props) => {
    const [name, setName] = useState('Gonzalo')
    const [lastName, setLastName] = useState('Gimenez')

    const swapName = () => {
        if (name === 'Jose'){
            setName('Gonzalo')
            setLastName('Gimenez')
        }
        else {
            setName('Jose')
            setLastName('Perez')
        }
    }

        return (
            <div>
                <TitleComponent name={name} lastName={lastName}/>   
                <button type='button' onClick={swapName}>Click me</button>
                <MyCard/>
            </div>
        );
}
 
export default Catalogo;