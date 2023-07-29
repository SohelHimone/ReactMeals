import React from "react";
import styles from '../DiningOut/DinningItem.module.css';


const DinningItem=(props)=>{
    return(
        <>
        <li className={styles.Dlist}>
            <div className={styles.listdiv}>
                <div className={styles.imgdiv}>
                  <img src={props.image} alt={props.name}></img>
                </div>
                <div className={styles.nameandrating}>
                <h3>{props.name}</h3>
                <h4 className={styles.rating}>{props.rating}*</h4>
                </div>
                <div className={styles.priceandtime}>
                <div className={styles.price}>{props.price}Rs</div>
                <div className={styles.deliveryTime}>{props.deliveryTime}</div>
                </div>
                
            </div>
        </li>
        </>
    )
}


export default DinningItem;