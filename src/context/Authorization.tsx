import { createContext, useContext, useState, type ReactNode } from "react";

type AuthType = {
    isAuthorized: boolean,
    login: ()=> void,
    logout: ()=> void
}

export const AuthContext = createContext <AuthType | undefined>(undefined)

 export const Authorization = ({children} : {children : ReactNode})=>{
    const [isAuthorized,setIsAuthorized] = useState(false)
    const login = ()=> setIsAuthorized(true)
    const logout = ()=> setIsAuthorized(false)

    return(
        <AuthContext.Provider value={{isAuthorized,login,logout}} >
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = ()=>{
    const context = useContext(AuthContext)
    if(!context){
         throw new Error("you need to be a valid user!!")
    }
    return context

}
export default useAuth