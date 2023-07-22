import React from "react";
import styles from '../Header/Header.module.css';
// import mealsimg from '../../../images/meals.jpg';
import Button from "./HeaderButtonCart";
import meals2img from '/home/sohel/Desktop/html/FoodOrder/myfoodapp/src/images/meal2.avif';

const Header=(props)=>{
    return(
      <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <Button showcart={props.showcart}/>
      </header>
      <div className={styles.mealsimage}>
         <img src={meals2img} alt="All the food are delicious"/>
      </div>
      </>
    )
}

export default Header;