import React from 'react'
import { Routes, Route } from 'react-router-dom';import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment'
import Auth from './Pages/Auth/Auth'
import Order from './Pages/Orders/Order'
import Category from './Components/Category/Category';
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

function Routing() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/payments" element={<Payment/>}/>
            <Route path="/Order" element={<Order/>}/>
            <Route path="/Category" element={<Category/>}/>
            <Route path="/cart" element={<Cart />} />            
            <Route path="/category/:categoryName" element={<Results />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
    </>
  )
}

export default Routing;