import React from "react";
import styles from '../Cart/CartItem.module.css'


const CartItem=(props)=>{
    return(
       <>
       <h2>{props.name}</h2>
       <div className={styles.container}>
            <div className={styles.content}>
                <span>{props.price} Rs</span>
                <span>x {props.amount}</span>
            </div>
            <div className={styles.cartItembtn}>
            <button className={styles.minusbtn} onClick={props.onRemove}>-</button>
            <button className={styles.plusbtn} onClick={props.onAdd}>+</button>
            </div>

       </div>
       </>
    )
}

export default CartItem;