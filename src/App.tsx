import { BrowserRouter, Route,Routes } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import Products from "./components/Products"
import Categories from "./components/categories"
import ProtectedRoutes  from "./context/ProtectedRoutes"
import {  Authorization } from "./context/Authorization"
import ProductDetails from "./components/productDetails"

import Logout from "./components/Logout"

function App() {
  return (
    <div>
      <Home/>
      {/* <Authorization>
      <BrowserRouter>
      <Routes>  
        <Route path="/login" element= { <Login/>} />
        <Route element={<ProtectedRoutes/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails/>} />

        </Route>
        </Routes></BrowserRouter>
      </Authorization> */}
      

    
      <Routes>
         <Route path="/products" element={<Products/>}/>
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
         <Route path="/logout" element={<Logout/>}/>
      </Routes>
    
     
    </div>
  )
}

export default App


// beko@gmail.com
// "uhuhax202"
// "beko"
