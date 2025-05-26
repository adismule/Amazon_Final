import React from 'react'
import { Routes, Route } from 'react-router-dom';import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment'
import SignUp from './Pages/Auth/SignUp'
import Order from './Pages/Orders/Order'
import Cart from './Pages/Cart/Cart'

function Routing() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/auth" element={<SignUp/>}/>
            <Route path="/payments" element={<Payment/>}/>
            <Route path="/Order" element={<Order/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
    </>
  )
}

export default Routing;