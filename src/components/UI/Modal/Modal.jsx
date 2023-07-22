import React from "react";
import styles from '../Modal/Modal.module.css';
import ReactDom from 'react-dom'; 

const Backdrop=(props)=>{
    return(
        <div className={styles.backdrop} onClick={props.hidecart}>
        </div>
    )
}

const Overlay=(props)=>{
    return(
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const overlay= document.getElementById('Overlay');

const Modal =(props)=>{
    return(
        <>
        {ReactDom.createPortal(<Backdrop hidecart={props.hidecart}/>,overlay)}
        {ReactDom.createPortal(<Overlay>{props.children}</Overlay>,overlay)}
        </>
      
    )
}


export default Modal;