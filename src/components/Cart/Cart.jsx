import React, { useContext, useState } from "react";
import styles from '../Cart/Cart.module.css';
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cartContext/CartContext";
import Checkout from "./CheckoutForm";
import BillDetails from "./Billdetails";



const Cart=(props)=>{
  const [phone,setPhone]=useState('');
  const [isChekout,setIsCheckout]=useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartctx=useContext(CartContext);
  const hasItems=cartctx.items.length > 0;




  const addCardItemhandler=(item)=>{
    cartctx.addItem({...item,amount:1})
  };


  const removeCardItemhandler=id=>{
    cartctx.removeItem(id);
  };

  const orderHandler=()=>{
      setIsCheckout(true)
  }
 
  
  const submithandler=async (userdata)=>{
    setPhone(userdata.phone);
    setIsSubmitting(true);
    console.log('clicked')
      await fetch('https://meals-94397-default-rtdb.firebaseio.com/OrderDetails.json',{
        method: 'POST',
        body: JSON.stringify({
        user: userdata,
        orderedItems: cartctx.items,
      }),
      })
      setIsSubmitting(false)
      setDidSubmit(true)
      cartctx.clearCart();
  }


    const cartItem= (<ul className={styles.cartitemul}>{cartctx.items.map((item)=>(
      <CartItem key={item.id} 
      name={item.name} 
      amount={item.amount} 
      price={item.price}
      onAdd={addCardItemhandler.bind(null,item)}
      onRemove={removeCardItemhandler.bind(null,item.id)}/>
     
    ))}</ul>);

    const modalAction=<><button className={styles.btnorder} onClick={props.hidecart}>Close</button>
                      {hasItems &&<button className={styles.btnorder} onClick={orderHandler}>Order</button>}</>

   
const cartModalContent=
    <React.Fragment>
         {cartItem}
          <div className={styles.total}>
            <span>Total Amount</span>
            <span>{cartctx.totalAmount}Rs</span>
          </div>
          {isChekout && <Checkout onConfirm={submithandler}  hidecart={props.hidecart}/>}
          <div className={styles.btndiv}>
            {!isChekout && modalAction}
          </div>
          </React.Fragment>
    
    const isSubmittingModalContent = <p>Saving Your Order Data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <BillDetails userphone={phone}/>
      <p className={styles.successcode}>Successfully Your Order Placed!</p>
      <div className={styles.actions}>
      <button className={styles.btnorder} onClick={props.hidecart}>
        Close
      </button>
    </div>
    </React.Fragment>
  );



    return(
       <Modal className={styles.cart} hidecart={props.hidecart}>
          {!isSubmitting && !didSubmit && cartModalContent}
          {isSubmitting && isSubmittingModalContent}
          {!isSubmitting && didSubmit && didSubmitModalContent}
       </Modal> 
    )
}

export default Cart;