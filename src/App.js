import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meal from "./components/Meals/Meals";
import CartProvider from "./store/cartContext/CartProvider";
import Addmeal from "./components/Cart/Addmeal";





function App() {
  
  const [showCart,setShowCart]=useState(false);
  const [showAddmeal,setShowAddmeal]=useState(false);
  
 
  const showcarthandler=()=>{
    setShowCart(true)
  }

  const hidecarthandler=()=>{
    setShowCart(false)
    
  }

  const showaddmealhandler=()=>{
    setShowAddmeal(true)
  }

  const hideaddmealhandler=()=>{
    setShowAddmeal(false)
  }
  

  return (
    <div className="App">
      <CartProvider>
      {showCart && <Cart hidecart={hidecarthandler}/>}
      {showAddmeal && <Addmeal hideaddmeal={hideaddmealhandler}/>}
        <Header showcart={showcarthandler} showAddmealcart={showaddmealhandler}/>
        <main>
        <Meal />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
