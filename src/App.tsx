import { BrowserRouter, Route,Routes } from "react-router-dom"
// import SighUp from "./components/SighUp"
// import Login from "./components/Login"
import Home from "./components/Home"
import Products from "./components/Products"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/sighnup" element={<SighUp/>} />
        <Route path="/login" element= { <Login/>} /> */}
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Products/>}/>
        </Routes></BrowserRouter>
      
    </div>
  )
}

export default App