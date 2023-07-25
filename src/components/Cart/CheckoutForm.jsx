import { useRef, useState } from 'react';
import styles from '../Cart/CheckoutForm.module.css';

const isempty=value=>value.trim()==='';
const postalno=value=>value.trim().length===6;
const phoneno=value=>value.trim().length===10;

const Checkout = (props) => {
  const [isvalidForm,setIsvalidForm]=useState({
    name:true,
    street:true,
    postal:true,
    city:true,
    phone:true
  })

  const enteredname = useRef();
  const enteredStreet = useRef();
  const enteredpostal = useRef();
  const enteredcity = useRef();
  const enteredphone = useRef();

  const Confirmhandler = (event) => {
    event.preventDefault();

    
    const name=enteredname.current.value;
    const Street=enteredStreet.current.value;
    const postal=enteredpostal.current.value;
    const city=enteredcity.current.value;
    const phone=enteredphone.current.value;


    const validname=!isempty(name);
    const validStreet=!isempty(Street);
    const validPostal=postalno(postal);
    const validCity=!isempty(city);
    const validPhone=phoneno(phone);
    
    setIsvalidForm({
        name:validname,
        street:validStreet,
        city:validCity,
        phone:validPhone,
        postal:validPostal
    })

    const validForm = validname && validCity && validPhone && validStreet && validPostal

    if(!validForm){
        return;
    }
    
    props.onConfirm({
        id:Date().now,
        name:name,
        street:Street,
        postal:postal,
        city:city,
        phone:phone
    })
   

    
  };

  const nameClass=`${styles.control} ${isvalidForm.name ? '': styles.invalid}`
  const streetClass=`${styles.control} ${isvalidForm.street ? '': styles.invalid}`
  const postalClass=`${styles.control} ${isvalidForm.postal ? '': styles.invalid}`
  const cityClass=`${styles.control} ${isvalidForm.city ? '': styles.invalid}`
  const phoneClass=`${styles.control} ${isvalidForm.phone ? '': styles.invalid}`

  return (
    <form className={styles.form} onSubmit={Confirmhandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' placeholder='Enter Your Name' ref={enteredname}/>
        {!isvalidForm.name && <p>please enter valid name</p>}
      </div>
      <div className={streetClass}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' placeholder='Enter Address'ref={enteredStreet}/>
        {!isvalidForm.street && <p>please enter valid Street Name</p>}
      </div>
      <div className={postalClass}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' placeholder='Enter Pincode' ref={enteredpostal}/>
        {!isvalidForm.postal && <p>please enter valid Postal Code</p>}
      </div>
      <div className={cityClass}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' placeholder='Enter City'ref={enteredcity}/>
        {!isvalidForm.city && <p>please enter valid City</p>}
      </div>
      <div className={phoneClass}>
        <label htmlFor='PhoneNo'>Phone No</label>
        <input type='text' id='PhoneNo' placeholder='Enter PhoneNo' ref={enteredphone}/>
        {!isvalidForm.phone && <p>please enter valid Phone no</p>}
      </div>
      <div className={styles.actions}>
        <button type='button' onClick={props.hidecart}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;