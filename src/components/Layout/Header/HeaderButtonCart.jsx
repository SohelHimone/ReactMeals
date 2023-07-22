import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from '../Header/HeaderCartButton.module.css'
import CartContext from "../../../store/cartContext/CartContext";

const Button=(props)=>{
   const cartctx=useContext(CartContext);
   const[bumpbtn,setBumpbtn]=useState(false);
    
   const {items}=cartctx
   const numberofitem= cartctx.items.reduce((currNumber,item)=>{
    return currNumber + item.amount;
   },0);

   useEffect(()=>{
      if(items.length===0){
         return;
      }
     const timer= setTimeout(()=>{
         setBumpbtn(false)
      },300);
     setBumpbtn(true);

     return (()=>{
      clearInterval(timer)
     })
   },[items])
   const btnanimate=`${styles.btn} ${bumpbtn ? styles.bump:''}`

    return(
      <>
      <button className={styles.addmeal} onClick={props.showAddmealcart}>Add Meal</button>
      <button className={btnanimate} onClick={props.showcart}>
        <span className={styles.icon}><FontAwesomeIcon icon={faCartShopping} /></span>
        <span className={styles.text}>Your Cart</span>
        <span className={styles.total}>{numberofitem}</span>
       </button>
      </>
       
    )
}

export default Button;