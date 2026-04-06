import { BrowserRouter, Route,Routes } from "react-router-dom"
import SighUp from "./components/SighUp"
import Login from "./components/Login"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SighUp/>} />
        <Route path="/login" element= { <Login/>} />
        </Routes></BrowserRouter>
      
    </div>
  )
}

export default App