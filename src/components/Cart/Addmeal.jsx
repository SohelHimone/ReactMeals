import React, { useEffect, useRef, useState } from "react";
import Modal from "../UI/Modal/Modal";
import styles from '../Cart/Addmeal.module.css';


const isempty=value=>value.trim()==='';

const Addmeal=(props)=>{
    const nameref=useRef();
    const Descref=useRef();
    const priceref=useRef();

    const[validForm,setValidForm]=useState({
        mealname:true,
        mealDesc:true,
        mealPrice:true
    });

    const [mealData,setMealData]=useState({
        name:null,
        desc:null,
        price:null
    })



    const submithandler=(event)=>{
       event.preventDefault();

       const mealname= nameref.current.value;  
       const mealDesc= Descref.current.value;  
       const mealprice= priceref.current.value;  

       const validmealname=!isempty(mealname);
       const validmealDesc=!isempty(mealDesc);
       const validmealprice=!isempty(mealprice);

       setValidForm({
        mealname:validmealname,
        mealDesc:validmealDesc,
        mealPrice:validmealprice
       })

       const validmealform= validmealname && validmealDesc && validmealprice


       if(!validmealform){
        return;
       }
       setMealData({
        name:mealname,
        desc:mealDesc,
        price:mealprice
       })
       
    }

    useEffect(()=>{
        fetch('https://meals-94397-default-rtdb.firebaseio.com/meals.json',{
            method:'POST',
            body:JSON.stringify(mealData)
        })
    },[mealData])


    const mealnameclass=`${styles.control} ${validForm.mealname ? '':styles.invalid}`
    const mealDescclass=`${styles.control} ${validForm.mealDesc ? '':styles.invalid}`
    const mealpriceclass=`${styles.control} ${validForm.mealPrice ? '':styles.invalid}`

    return(
        <Modal>
        <h1>Addmeal</h1>
        <form  className={styles.form} onSubmit={submithandler}>
            <div  className={mealnameclass}>
             <label>Name</label>
             <input type="text" placeholder="Enter Meal Name" ref={nameref}/>
             {!validForm.mealname && <p>Please Enter The valid Meal Name</p>}
            </div>
            <div  className={mealDescclass}> 
             <label>Description</label>
             <input type="text" placeholder="Enter Meal Description" ref={Descref}/>
             {!validForm.mealDesc && <p>Please Enter The valid Meal Description</p>}
            </div>
            <div  className={mealpriceclass}>
             <label>Price</label>
             <input type="number" placeholder="Enter Meal Price" ref={priceref}/>
             {!validForm.mealPrice && <p>Please Enter The valid Meal Price</p>}
            </div>
            <div className={styles.actions}>
                <button type="button" onClick={props.hideaddmeal}>Cancel</button>
                <button type="submit">Save</button>
            </div>
          
        </form>
        </Modal>
    )
}

export default Addmeal;