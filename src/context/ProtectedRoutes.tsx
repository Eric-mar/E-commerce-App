import { Navigate, Outlet } from "react-router-dom"
import  useAuth  from "./Authorization"


 const ProtectedRoutes = ()=>{
    const {isAuthorized} = useAuth()
    if(!isAuthorized){
        return <Navigate to='/login' replace />
    }
    return <Outlet/>
   

}

export default ProtectedRoutes