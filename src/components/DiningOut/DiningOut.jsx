import React, { useEffect, useState } from "react";
import { DiningoutData } from "../../Mealdata/DinningOut";
import DinningItem from "./DinningItem";
import styles from '../DiningOut/DiningOut.module.css'


const DiningOut=()=>{

    const [dinningmeal,setDinningMeal]=useState([]);
    const[loading,setLoading]=useState(false);
    
    
    const DiningoutDataname=DiningoutData.map(name=>name?.info?.name??'');
    const DiningoutDataCoverimg=DiningoutData.map(coverimg=>coverimg?.info?.image?.url)
    const DiningoutDatadeliveryTime=DiningoutData.map(time=>time?.order?.deliveryTime)
    const DiningoutDatarating=DiningoutData.map(rate=>rate?.info?.rating?.rating_text)
    const DiningoutDataoffers=DiningoutData.map(offer=>offer?.bulkOffers?.text)
    const DiningoutDatacfoprice=DiningoutData.map(cfoprice=>cfoprice?.info?.cfo?.text)

    
    useEffect(() => {
        const hasDataSent = localStorage.getItem("dataSent");
        if (!hasDataSent) {
          const sendDinngout = async () => {
            const requests = DiningoutData.map(async (data, index) => {
              const dinnigoutentry = {
                name: DiningoutDataname[index],
                image: DiningoutDataCoverimg[index],
                deliveryTime: DiningoutDatadeliveryTime[index],
                rating: DiningoutDatarating[index],
                offer: DiningoutDataoffers[index],
                price: DiningoutDatacfoprice[index],
              };
    
              await fetch("https://meals-94397-default-rtdb.firebaseio.com/Dinningmeal.json", {
                method: "POST",
                body: JSON.stringify(dinnigoutentry),
              });
            });
    
            await Promise.all(requests);
            localStorage.setItem("dataSent", "true");
          };
    
          sendDinngout();
        }
      },[DiningoutDataCoverimg,DiningoutDatacfoprice,DiningoutDatadeliveryTime,DiningoutDataname,DiningoutDataoffers,DiningoutDatarating])



      const fetchDinningData = async () => {
        setLoading(true)
        const response = await fetch(
          "https://meals-94397-default-rtdb.firebaseio.com/Dinningmeal.json"
        );
        const responseData = await response.json();
    
        const LoadData = [];
    
        for (const key in responseData) {
          LoadData.push({
            id: key,
            name: responseData[key].name,
            image: responseData[key].image,
            price: responseData[key].price,
            rating: responseData[key].rating,
          });
        }
        LoadData.reverse();
        console.log("loaddata", LoadData);
        setDinningMeal(LoadData);
        setLoading(false)
      };
    
      useEffect(() => {
        fetchDinningData();
    
        // Fetch new data every 5 seconds
        const intervalId = setInterval(fetchDinningData, 5000);
    
        return () => clearInterval(intervalId); // Cleanup function to stop interval on unmount
      }, []);
    

    return(
        <>
        <h1 className={styles.h1tag}>Dinning Out</h1>
        {loading && <p className={styles.loadingclass}>Loading...</p>}
        <section className={styles.meal}>
           <ul className={styles.mealul}>
            {dinningmeal.map((Dinngmeal)=>
            <DinningItem  key={Dinngmeal.id}
            id={Dinngmeal.id}
            name={Dinngmeal.name}
            price={Dinngmeal.price}
            image={Dinngmeal.image}
            rating={Dinngmeal.rating} 
            />)}
           </ul>
       </section>
        </>
    )
}


export default DiningOut;