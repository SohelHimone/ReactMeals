import React, { useEffect, useState } from "react";
import styles from "../Cart/BillDetails.module.css";


const BillDetails = (props) => {
 
  const phone = props.userphone;
  const [userDetails, setUserDetails] = useState(null); // Change initial state to null
  const [orderDetails, setOrderDetails] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  console.log('bill details name',phone)

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(
          "https://meals-94397-default-rtdb.firebaseio.com/OrderDetails.json"
        );
        const responseData = await response.json();

        // Find the order data for the specific user (use the dynamically provided user name)
        const userOrderData = Object.values(responseData).find(
          (order) => order.user.phone === phone
        );

        if (userOrderData) {
          setUserDetails(userOrderData.user);
          setOrderDetails(userOrderData.orderedItems);

          const total = userOrderData.orderedItems.reduce(
            (accumulator, item) => accumulator + item.price * item.amount,
            0
          );
          setTotalAmount(total);
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      }


    };

    fetchOrderDetails();
  }, [phone]);

  if (!userDetails) {
    // Add a loading state here or return null while userDetails is null
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.billContainer}>
      <div className={styles.userDetails}>
        <h2>Name: {userDetails.name}</h2>
        <h3>Phone: {userDetails.phone}</h3>
      </div>

      <div className={styles.orderDetails}>
        <h2>Order List</h2>
        <ul>
          {orderDetails.map((meal) => (
            <li key={meal.id}>
              <span>{meal.name}</span>
              <span>x{meal.amount}</span>
              <span>{meal.price} Rs</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount} Rs</span>
      </div>
    </div>
  );
};

export default BillDetails;
