import React, { useEffect, useState } from "react";
import styles from '../Meals/MealAvailable.module.css';
import MealItem from "./MealItem/MealItem";

// const Dummy_Meal=[
//     {
//         id:1,
//         name:'Chicken',
//         Price:'220',
//         Desc:'Healty ...Protiens'
//     },
//     {
//         id:2,
//         name:'Panner',
//         Price:'300',
//         Desc:'Healty ...Protiens'
//     },
//     {
//         id:3,
//         name:'Roti',
//         Price:'220',
//         Desc:'Healty ...fit'
//     },
//     {
//         id:4,
//         name:'Vegetables',
//         Price:'120',
//         Desc:'Healty ...Greeny'
//     }

// ]

const MealAvailable=()=>{
    const [meals,setMeals]=useState([]);
    const[loading,setLoading]=useState(true);

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
                desc:responedata[key].desc
             })
          }
          console.log('loaddata',LoadData)
          setMeals(LoadData)
          setLoading(false)
        }

        fetchdata()
    },[])

    if(loading){
        return(<section className={styles.loading}>
            <p>Loading...</p>
        </section>)
    }
    return(
       <section className={styles.meals}>
           <ul>
            {meals.map((meal)=>
            <MealItem key={meal.id}
            id={meal.id}
            name={meal.name}
            desc={meal.desc}
            price={meal.price}
            />)}
           </ul>
       </section>
    )
}


export default MealAvailable;