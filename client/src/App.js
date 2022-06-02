import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from './pages/Cart';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Productpage from './pages/Productpage';
import Registration from './pages/Registration';
import SingleProductPage from './pages/SingleProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import Success from './pages/Success';
import { useSelector } from "react-redux";





function App() {
  const user = useSelector((state) => state.user.currentUser); 
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  
  return (
    <ParallaxProvider>
   <BrowserRouter>
    <Routes>

      {/*  Home page*/}
      <Route path="/" element={<LandingPage/>} />


     
       {/* all products page*/}
      <Route path="/products" element={<Productpage/>} >

         {/*  products determined by category*/}
        <Route path=":category" element={<Productpage/>} />
      </Route>


       {/*  single product page determined by id*/}
      <Route path="/product" element={<SingleProductPage/>} >
          <Route path=":id" element={<SingleProductPage/>}/>
      </Route>


       {/*  path to view items in cart page*/}
      <Route path="/cart" element={<Cart/>} />


      {/*  path to view success page*/}
      <Route path="/success" element={<Success/>} />


       {/*  path to view about page*/}
      <Route path="/about" element={<AboutPage/>} />



        {/*  path to view element page*/}
      <Route path="/contact" element={<ContactPage/>} />



        {/*  path to view login page*/}
      <Route path="/login" element={user ? <Navigate to ="/"/> : <Login/>} />




      
     
      {/*  path to view register page*/}
      <Route path="/register" element={user ? <Navigate to ="/"/> : <Registration/>} />

      
      
    </Routes>
   
   </BrowserRouter>
   </ParallaxProvider>
  );
}

export default App;
