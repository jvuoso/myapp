import { useCart } from '../../contexts/CartContext'
import {getFirestore, collection, addDoc} from "firebase/firestore"
import { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-cool-form";
import "./styles.css";

var endPurchase = false; 

const Formulario = () => {

    const {cart, totalPrice} = useCart();
    const [purchaseId, setPurchaseId] = useState(0)

    const checkOut = (values, cart) => {
        // console.log(values)
     
        const order = {
            buyer: {
                name: values.name,
                email: values.email,
                phone: values.phone
            },
            items: cart,
            date: new Date(Date.now()).toISOString(),
            totalPrice: totalPrice
        };
        const db = getFirestore();
     
        const ordersCollection = collection(db, "orders");
     
        addDoc(ordersCollection, order).then( ({ id }) => {
             setPurchaseId(id);
             console.log(id)
         });
     
         endPurchase = true;
     }

    const { form, use } = useForm({
        defaultValues: { name: "", email: "", phone: "" },
        onSubmit: (values) => checkOut(values, cart)
        //(values) => alert(JSON.stringify(values, undefined, 2))
        
        
      });
      const errors = use("errors");
    
      return (
        <div>
         {!Boolean(endPurchase) && (<form  ref={form} noValidate>
          <div>
            <input name="name" placeholder="Name" required />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <input name="email" placeholder="Email" required />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <input name="phone" placeholder="Phone number" required />
            {errors.phone && <p>{errors.phone}</p>}
          </div>
          <input type="submit" />
        </form>)}
        {Boolean(endPurchase) && (<h2><b>Compra realizada con éxito!</b></h2>)}
        {Boolean(endPurchase) && (<h4>Su codigo de operación es {purchaseId} </h4>)}
        </div>
      );
}

export default Formulario;