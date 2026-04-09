import { BrowserRouter, Route,Routes } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import Products from "./components/Products"
import Categories from "./components/categories"
import ProtectedRoutes  from "./context/ProtectedRoutes"
import {  Authorization } from "./context/Authorization"
import ProductDetails from "./components/productDetails"

function App() {
  return (
    <div>
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
     <BrowserRouter>
      <Routes>
        
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
     
    </div>
  )
}

export default App


// beko@gmail.com
// "uhuhax202"
// "beko"
