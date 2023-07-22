import React, { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from '../MealItem/MealItemForm.module.css';

const MealItemForm=(props)=>{

    const AmountinputRef=useRef();
    const [validAmount,setValidAmount]=useState(true);
 
    const submitFormHandler=(e)=>{
        e.preventDefault();
      
        const enteredAmount= AmountinputRef.current.value;
        const enteredAmountNumber= +enteredAmount;

        if(enteredAmountNumber === 0 || enteredAmountNumber <1 || enteredAmountNumber >1000){
            setValidAmount(false)
            return;
        }
        //passing this props to addcart function bcoz all value are avaliable thier
        props.onAddCartItem(enteredAmountNumber)
    }
    return(
        <form className={styles.form} onClick={submitFormHandler}>
            <Input label='Amount'
            ref={AmountinputRef} 
            input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'1000',
                step:'1',
                defaultValue:'1'
            }}/>
            <button className={styles.btn}>+ Add</button>
            {!validAmount && <p>Please Entered The Valid Input in Amount(1-1000)</p>}
        </form>
    )
}

export default MealItemForm;