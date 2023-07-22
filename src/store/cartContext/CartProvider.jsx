import React, { useReducer } from "react";
import CartContext from '../cartContext/CartContext'


const defaultState={
    items:[],
    totalAmount:0
}

const CartContextReducer=(state,action)=>{
    if(action.type==='ADD'){
        const UpdatedAmount= state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex= state.items.findIndex((item)=>item.id===action.item.id);

        const existingCartItem=state.items[existingCartItemIndex];

        let updatedItems;

        if(existingCartItem){
            const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            };
            updatedItems=[...state.items]
            updatedItems[existingCartItemIndex]=updatedItem;
        }else{
            updatedItems= state.items.concat(action.item);
        }
         
        

        return {
            items:updatedItems,
            totalAmount:UpdatedAmount
        }
    }


    if(action.type==='REMOVE'){
        const existingCartItemIndex= state.items.findIndex(item=>item.id===action.id);
        const existingCartItem= state.items[existingCartItemIndex];
        const UpdatedTotalAmount= state.totalAmount - existingCartItem.price;
        let updatedItems;

        if(existingCartItem.amount===1){
           updatedItems=state.items.filter(item=>item.id!==action.id);
        }else{
            const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount - 1
            };
            updatedItems=[...state.items]
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        
        return{
            items:updatedItems,
            totalAmount:UpdatedTotalAmount
        }
    }

    if(action.type==='CLEAR'){
        return defaultState
        
    }

    return defaultState;
}


const CartProvider=(props)=>{

    const [cartState,dispatchCartfn]=useReducer(CartContextReducer,defaultState);

    const addItemhandler=(item)=>{
         dispatchCartfn({
            type:'ADD',
            item:item
         })
    }

    const removeItemhandler=(id)=>{
        dispatchCartfn({
            type:'REMOVE',
            id:id,
        })
    }
    const clearcarthandler=()=>{
        dispatchCartfn({type:'CLEAR',})
    }
    const cartContext={
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemhandler,
        removeItem: removeItemhandler,
        clearCart:clearcarthandler,

    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
  
}

export default CartProvider;