import { Component } from 'react';
import TitleComponent from './title/title';
import MyCard from './mycard/mycard';

class Catalogo extends Component {
    constructor (props){
        super(props)    
        this.state = {
            name: "Juani"
        }
    }
    render() { 
        return <div>
            <TitleComponent name={this.state.name}/>
            <TitleComponent name={"Marcelo"}/>
            <MyCard/>
        </div>;
    }
}
 
export default Catalogo;