import { Navigate, Outlet, useLocation } from "react-router-dom"
import  useAuth  from "./Authorization"


 const ProtectedRoutes = ()=>{
    const {isAuthorized} = useAuth()
    const location = useLocation()
    if(!isAuthorized){
        return <Navigate to='/login' state={{from: location}} replace />
    }
    return <Outlet/>
   

}

export default ProtectedRoutes