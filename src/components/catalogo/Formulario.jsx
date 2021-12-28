import { useCart } from '../../contexts/CartContext'
import {getFirestore, collection, addDoc, writeBatch, doc} from "firebase/firestore"
import { useForm } from "react-cool-form";
import Input from '@mui/material/Input';
import Swal from 'sweetalert2'
import {cartSum} from '../navbar/Cart'

var endPurchase = false; 

const Formulario = () => {

    const {cart, totalPrice, cleanCart} = useCart();

    const checkOut = (values, cart) => {
     
        const order = {
            buyer: {
                name: values.name,
                email: values.email,
                phone: values.phone
            },
            items: cartSum,
            date: new Date(Date.now()).toISOString(),
            totalPrice: totalPrice
        };
        const db = getFirestore();
     
        const ordersCollection = collection(db, "orders");
     
        addDoc(ordersCollection, order).then( ({ id }) => {
             Swal.fire({
                title: "Compra realizada exitosamente",
                text: `Su codigo de operacion es ${id}`,
                icon: "success",
                confirmButtonText: "OK"
            });
            cleanCart();
         });

         const batch = writeBatch(db);
         cartSum.forEach((item) => {
            const itemRef = doc(db, "items", item.id)
            batch.update(itemRef, {stock: parseInt(item.product.stock) - item.quantity});
         });

         batch.commit()

         //endPurchase = true;
     }

    const { form, use } = useForm({
        defaultValues: { name: "", email: "", phone: "" },
        onSubmit: (values) => checkOut(values, cart)
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
        </div>
      );
}

export default Formulario;