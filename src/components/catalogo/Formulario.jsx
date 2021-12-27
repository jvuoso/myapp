import { useCart } from '../../contexts/CartContext'
import {getFirestore, collection, addDoc} from "firebase/firestore"
import { useState } from "react";
import { useForm } from "react-cool-form";
import Input from '@mui/material/Input';

var endPurchase = false; 

const Formulario = () => {

    const {cart, totalPrice} = useCart();
    const [purchaseId, setPurchaseId] = useState(0)

    const checkOut = (values, cart) => {
     
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
         {!Boolean(endPurchase) && (<h1>Complete sus datos para finalizar</h1>)}
         {!Boolean(endPurchase) &&(<form  ref={form} noValidate>
          <div>
            <Input name="name" placeholder="Name" required />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <Input name="email" placeholder="Email" required />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <Input name="phone" placeholder="Phone number" required />
            {errors.phone && <p>{errors.phone}</p>}
          </div>
          <Input type="submit" />
        </form>)}
        {Boolean(endPurchase) && (<h2><b>Compra realizada con éxito!</b></h2>)}
        {Boolean(endPurchase) && (<h4>Su codigo de operación es {purchaseId} </h4>)}
        </div>
      );
}

export default Formulario;