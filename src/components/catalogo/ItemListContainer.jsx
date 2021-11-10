import TitleComponent from './title/title';
import ItemCount from './ItemCount'
import MyCard from './mycard/mycard';

const ItemListContainer = () => {
        return (
            <div>
                <TitleComponent name={"Martin"} lastName={"Palermo"}/>   
                <MyCard/>
                <ItemCount stock="8" initial="2" />
            </div>
        );
}
 
export default ItemListContainer;