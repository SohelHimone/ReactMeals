import React, {  useRef, useState } from "react";
import Modal from "../UI/Modal/Modal";
import styles from '../Cart/Addmeal.module.css';
import { zomatoData } from "../../Mealdata/data";




const isempty=value=>value.trim()==='';

const Addmeal=(props)=>{
    const nameref=useRef();
    const Descref=useRef();
    const deliverytimeref=useRef();
    const priceref=useRef();
    const ratingref=useRef();
    const offerref=useRef();
    const imageref=useRef();
     
    
    const zomatoDataname=zomatoData.map(name=>name?.info?.name??'');
    const zomatoDataCoverimg=zomatoData.map(coverimg=>coverimg?.info?.image?.url)
    const zomatoDatadeliveryTime=zomatoData.map(time=>time?.order?.deliveryTime)
    const zomatoDatarating=zomatoData.map(rate=>rate?.info?.rating?.rating_text)
    const zomatoDataoffers=zomatoData.map(offer=>offer?.bulkOffers?.text)
    const zomatoDatacfoprice=zomatoData.map(cfoprice=>cfoprice?.info?.cfo?.text)
   

    const[validForm,setValidForm]=useState({
        mealname:true,
        mealDesc:true,
        mealPrice:true,
        mealdeliverytime:true,
        mealoffer:true,
        mealrating:true,
        mealimage:true
    });



    const submithandler=async(event)=>{
       event.preventDefault();

       const mealname= nameref.current.value;  
       const mealDesc= Descref.current.value;  
       const mealprice= priceref.current.value;  
       const mealdeliverytime= deliverytimeref.current.value;  
       const mealoffer= offerref.current.value;  
       const mealrating= ratingref.current.value;  
       const mealimage= imageref.current.value;  


       const resetInputFields = () => {
        nameref.current.value = '';
        Descref.current.value = '';
        priceref.current.value = '';
        deliverytimeref.current.value = '';
        offerref.current.value = '';
        ratingref.current.value = '';
        imageref.current.value = '';
      };

       const validmealname=!isempty(mealname);
       const validmealDesc=!isempty(mealDesc);
       const validmealprice=!isempty(mealprice);
       const validmealdeliverytime=!isempty(mealdeliverytime);
       const validmealoffer=!isempty(mealoffer);
       const validmealimage=!isempty(mealimage);
       const validmealrating=!isempty(mealrating);
       

       setValidForm({
        mealname:validmealname,
        mealDesc:validmealDesc,
        mealPrice:validmealprice,
        mealdeliverytime:validmealdeliverytime,
        mealimage:validmealimage,
        mealrating:validmealrating,
        mealoffer:validmealoffer
       })

       const validmealform= validmealname && validmealDesc && validmealprice && validmealdeliverytime && validmealimage 
       && validmealoffer && validmealrating


       if(!validmealform){
        return;
       }


       const newMealData = {
        name: mealname,
        desc: mealDesc,
        price: mealprice,
        imageurl: mealimage,
        deliveryTime: mealdeliverytime,
        offer: mealoffer,
        rating: mealrating,
      };
    

      
        
       
      // Then send the newMealData to the server
      await fetch('https://meals-94397-default-rtdb.firebaseio.com/meals.json', {
        method: 'POST',
        body: JSON.stringify(newMealData),
        headers: {
          'Content-Type': 'application/json',
        },
      });


      resetInputFields();
    }

    
       const zomatosendata=async(e)=>{
        e.preventDefault();
        await Promise.all(
          zomatoData.map(async (data, index) => {
            const zomatoEntry = {
              name: zomatoDataname[index],
              imageurl: zomatoDataCoverimg[index],
              deliveryTime: zomatoDatadeliveryTime[index],
              rating: zomatoDatarating[index],
              offer: zomatoDataoffers[index],
              price: zomatoDatacfoprice[index],
            };
      
            // Assuming you are using fetch to send data to the server
            const response = await fetch('https://meals-94397-default-rtdb.firebaseio.com/meals.json', {
              method: 'POST',
              body: JSON.stringify(zomatoEntry),
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            // Handle the response from Zomato if needed
            const responseData = await response.json();
            console.log('Zomato Response:', responseData);
          })
        );
        
       }
      
   
   
      

    const mealnameclass=`${styles.control} ${validForm.mealname ? '':styles.invalid}`
    const mealDescclass=`${styles.control} ${validForm.mealDesc ? '':styles.invalid}`
    const mealpriceclass=`${styles.control} ${validForm.mealPrice ? '':styles.invalid}`
    const mealdeliverytimeclass=`${styles.control} ${validForm.mealdeliverytime ? '':styles.invalid}`
    const mealimageclass=`${styles.control} ${validForm.mealimage ? '':styles.invalid}`
    const mealofferclass=`${styles.control} ${validForm.mealoffer ? '':styles.invalid}`
    const mealratingclass=`${styles.control} ${validForm.mealrating ? '':styles.invalid}`

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
             <input type="text" placeholder="Enter Meal Price" ref={priceref}/>
             {!validForm.mealPrice && <p>Please Enter The valid Meal Price</p>}
            </div>
            <div  className={mealimageclass}>
             <label>Image</label>
             <input type="text" placeholder="Enter Meal Image" ref={imageref}/>
             {!validForm.mealimage && <p>Please Enter The valid Meal Image</p>}
            </div>
            <div  className={mealofferclass}>
             <label>Offer</label>
             <input type="text" placeholder="Enter Meal Offer" ref={offerref}/>
             {!validForm.mealoffer && <p>Please Enter The valid Meal Offer</p>}
            </div>
            <div  className={mealdeliverytimeclass}>
             <label>Delivery Time</label>
             <input type="text" placeholder="Enter Meal Delivery Time" ref={deliverytimeref}/>
             {!validForm.mealdeliverytime && <p>Please Enter The valid Meal Delivery Time</p>}
            </div>
            <div  className={mealratingclass}>
             <label>Rating</label>
             <input type="number" placeholder="Enter Meal Rating" ref={ratingref}/>
             {!validForm.mealrating && <p>Please Enter The valid Meal Rating</p>}
            </div>
            <div className={styles.actions}>
                <button type="button" onClick={props.hideaddmeal}>Cancel</button>
                <button type="submit">Add Manually</button>
                <button onClick={zomatosendata}>Add Data</button>
            </div>
          
        </form>
        </Modal>
    )
}

export default Addmeal;