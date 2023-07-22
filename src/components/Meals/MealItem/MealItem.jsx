import React, { useContext } from "react";
import styles from '../MealItem/MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cartContext/CartContext";


const MealItem=(props)=>{
    // const Price=`$${props.price.toFixed(2)}`;

    const CartCtx=useContext(CartContext);

    const AddcartItemhandler=(amount)=>{
         CartCtx.addItem({
            id:props.id,
            amount:amount,
            name:props.name,
            price:props.price
         })
 
    }
    return(
        <>
        <li className={styles.list}>
            <div className={styles.listdiv}>
                <h3>{props.name}</h3>
                <div className={styles.desc}>{props.desc}</div>
                <div className={styles.price}>{props.price}Rs</div>
            </div>
            <div>
              <MealItemForm onAddCartItem={AddcartItemhandler} />
            </div>
        </li>
        </>
    )
}

export default MealItem;