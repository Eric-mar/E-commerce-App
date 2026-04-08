import { createContext, useContext, useState, type ReactNode } from "react";
type AuthorizationType = {
    isAuthorized : boolean,
    login: ()=> void,
    logout: ()=> void
}


const AuthContext = createContext <AuthorizationType | undefined>(undefined)

export const AuthContent = ({children}: {children: ReactNode})=>{

    const [isAuthorized , setIsAuthorized] = useState(false)

    const login = () => setIsAuthorized(true)
    const logout = () => setIsAuthorized(false)

    return(
        <AuthContext.Provider value= {{isAuthorized,login , logout}}>
            {children}
        </AuthContext.Provider>

    )

}

const useAuth = ()=>{
    const context = useContext(AuthContext)
    if(!context) throw new Error('try again ')
        return context
}

export default useAuth