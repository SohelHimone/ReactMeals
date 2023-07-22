import React from "react";
import styles from '../Input/Input.module.css';


const Input=React.forwardRef((props,ref)=>{
    return(
       <section className={styles.section}>
       <label className={styles.label} htmlFor={props.input.id}>{props.label}</label>
       <input ref={ref} {...props.input} className={styles.Input}/>
       </section>
    )
})


export default Input;