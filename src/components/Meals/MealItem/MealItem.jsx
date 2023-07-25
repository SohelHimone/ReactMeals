import React, { useContext } from "react";
import styles from '../MealItem/MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cartContext/CartContext";


const MealItem=(props)=>{
    // const Price=`$${props.price.toFixed(2)}`;
    const priceString = props.price;

    const priceNumeric = parseFloat(priceString.replace(/[^0-9.]/g, ''));

    const CartCtx=useContext(CartContext);

    const AddcartItemhandler=(amount)=>{
         CartCtx.addItem({
            id:props.id,
            amount:amount,
            name:props.name,
            price:priceNumeric
         })
 
    }
    return(
        <>
        <li className={styles.list}>
            <div className={styles.listdiv}>
                <div className={styles.imgdiv}>
                  <img src={props.image} alt={props.name}></img>
                </div>
                <div className={styles.offer}>
                    <p >{props.offer}</p>
                </div>
                <div className={styles.nameandrating}>
                <h3>{props.name}</h3>
                <h4 className={styles.rating}>{props.rating}*</h4>
                </div>
                <div className={styles.priceandtime}>
                <div className={styles.price}>{props.price}Rs</div>
                <div className={styles.deliveryTime}>{props.deliveryTime}</div>
                </div>
                
            </div>
            <div>
              <MealItemForm onAddCartItem={AddcartItemhandler} />
            </div>
        </li>
        </>
    )
}

export default MealItem;