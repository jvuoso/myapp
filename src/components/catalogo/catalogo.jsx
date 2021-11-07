import { Component, useState, useEffect } from 'react';
import TitleComponent from './title/title';
import MyCard from './mycard/mycard';
import { render } from '@testing-library/react';
//var moment = require('moment');

/* class Catalogo extends Component {
    constructor (props){
        super(props)    
        this.state = {
            name: "Juani"
        }
    }
    updateName = (e) => {
        e.preventDefault();
        this.setState({name: 'Mario'})
    }
    render() { 
        return <div>
            <TitleComponent name={this.state.name} onSaludar={this.updateName}/>
        </div>;
    }
} */

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
        //console.log(new Date())
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