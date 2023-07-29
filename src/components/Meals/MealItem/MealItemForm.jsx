import React, {  useEffect,useContext, useState } from "react";
import styles from '../MealItem/MealItemForm.module.css';
import CartContext from "../../../store/cartContext/CartContext";

const MealItemForm=(props)=>{



    const [incr,setIncr]=useState(0)
    const cartCtx=useContext(CartContext);
    
    useEffect(() => {
        if (cartCtx.totalAmount === 0) {
          setIncr(0);
        }
      }, [cartCtx.totalAmount]);

  
        const quantityHandler = () => {
            // Prevent the quantity from going below zero (if needed)
            if (incr >= 0) {
                setIncr((prevIncr) => prevIncr + 1);
                // Pass the updated quantity to the parent component
                props.onAddCartItem(incr + 1);
            }
    }
     
    return(
        <div className={styles.quantitydiv}>
           <label className={styles.qunatitylabel}>Qunatity</label>
            <span className={styles.qunatityspan}>{incr}</span>
            <button className={styles.btn} onClick={quantityHandler}>+ Add</button>
        </div>
            
        
    )
}

export default MealItemForm;