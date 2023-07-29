import React from "react";
import styles from '../Cart/Navigation.module.css';
import {NavLink} from 'react-router-dom';


const Navigation=()=>{
    return(
    
        <>
          <ul className={styles.navul}>
            <li>
              <NavLink to="/" className={({isActive})=>isActive ? styles.active:undefined} end>Delivery</NavLink>
            </li>
            <li>
            <NavLink to="/Dinningout" className={({isActive})=>isActive ? styles.active:undefined}>Dining Out</NavLink>
            </li>
            <li>
            <NavLink to="/Nightout" className={({isActive})=>isActive ? styles.active:undefined}>Nightlife</NavLink>
            </li>
          </ul>
        </>
        
    )
}


export default Navigation; 