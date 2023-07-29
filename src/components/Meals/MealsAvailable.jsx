import React, { useEffect, useState } from "react";
import styles from '../Meals/MealAvailable.module.css';
import MealItem from "./MealItem/MealItem";

const MealAvailable=()=>{
    const [meals,setMeals]=useState([]);
    const[loading,setLoading]=useState(true);
    const [datachanged,setDatachange]=useState(false)

    useEffect(()=>{

       const fetchdata=async()=>{
          const response =await fetch('https://meals-94397-default-rtdb.firebaseio.com/meals.json');
          const responedata=await response.json();
          
          const LoadData=[]
           
          for (const key in responedata){
             LoadData.push({
                id:key,
                name:responedata[key].name,
                price:responedata[key].price,
                desc:responedata[key].desc,
                image:responedata[key].imageurl,
                deliveryTime:responedata[key].deliveryTime,
                offer:responedata[key].offer,
                rating:responedata[key].rating                
             })
          }
          LoadData.reverse();
          console.log('loaddata',LoadData)
          setMeals(LoadData)
          setLoading(false)
        }

        fetchdata()
    },[datachanged])

    const fetchDataOnChange = () => {
        setDatachange((prevDataChanged) => !prevDataChanged);
      };
    

    if(loading){
        return(<section className={styles.loading}>
            <p>Loading...</p>
        </section>)
    }
    return(
        <>
         <section className={styles.meals}>
         <button onClick={fetchDataOnChange} className={styles.newmealbtn}>Check For New Meal</button>
           <ul>
            {meals.map((meal)=>
            <MealItem key={meal.id}
            id={meal.id}
            name={meal.name}
            desc={meal.desc}
            price={meal.price}
            image={meal.image}
            deliveryTime={meal.deliveryTime}
            offer={meal.offer}
            rating={meal.rating} 
            />)}
           </ul>
       </section>

        </>
       
    )
}


export default MealAvailable;