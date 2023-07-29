import Header from "./components/Layout/Header/Header";
import Meal from "./components/Meals/Meals";
import CartProvider from "./store/cartContext/CartProvider";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import RootLayout from "./components/Root/RootLayout";
import DiningOut from "./components/DiningOut/DiningOut";
import Nightout from './components/NightOut/NightOut';




function App() {
  
 
  const router=createBrowserRouter([
    {path:'/',
     element:<RootLayout/>,
     children:[{
      path:'/',
      element:<Meal/>
     },
     {
      path:'Dinningout',
      element:<DiningOut/>
     },
     {
      path:'Nightout',
      element:<Nightout/>
     }
    ]  
  
  }
  ])
  

  return (
   

    
    <div className="App">
      
      <CartProvider>
      <RouterProvider router={router}>
        <Header/>
        <main>
        <Meal />
        </main>
        </RouterProvider>
      </CartProvider>
     
    </div>
    
  );
}

export default App;
