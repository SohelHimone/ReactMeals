import React, { useContext } from "react";
import styles from '../Header/Header.module.css';
// import mealsimg from '../../../images/meals.jpg';
import Button from "./HeaderButtonCart";
import meals2img from '/home/sohel/Desktop/html/FoodOrder/myfoodapp/src/images/meal2.avif';
import Navigation from "../../Cart/Navigation";
import { useState } from "react";
import Cart from '../../../components/Cart/Cart';
import Addmeal from '../../../components/Cart/Addmeal';
import CartContext from "../../../store/cartContext/CartContext";

const Header=(props)=>{

  const [showCart,setShowCart]=useState(false);
  const [showAddmeal,setShowAddmeal]=useState(false);
  const cartCtx=useContext(CartContext);
  
 
  const showcarthandler=()=>{
    setShowCart(true)
  
  }

  const hidecarthandler=()=>{
    setShowCart(false)
    cartCtx.clearCart()
  }

  const showaddmealhandler=()=>{
    setShowAddmeal(true)
    
  }

  const hideaddmealhandler=()=>{
    setShowAddmeal(false)
  }
   
    return(
      <div className={styles.headercontainer}>
      <header className={styles.header}>
      {showCart && <Cart hidecart={hidecarthandler} />}
      {showAddmeal && <Addmeal hideaddmeal={hideaddmealhandler}/>}
        <h1>ReactMeals</h1>
        <Button showcart={showcarthandler} showAddmealcart={showaddmealhandler}/>
      </header>
     <div className={styles.navigationdiv}>
        <Navigation/>
     </div>
      <div className={styles.mealsimage}>
         <img src={meals2img} alt="All the food are delicious"/>
      </div>
      </div>
    )
}

export default Header;