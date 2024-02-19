import {useContext, createContext, useState} from "react"

const userContext = createContext()

export const useUser = ()=>{
    const context = useContext(userContext)
    return context
}

export default function UserProvider({children}) {
    const [isAuthenticate, setIsAuthenticate] = useState(false)
<<<<<<< HEAD

    return <userContext.Provider value={{
        isAuthenticate,
        setIsAuthenticate
=======
    const [userData, setUserData] = useState({})

    return <userContext.Provider value={{
        isAuthenticate,
        setIsAuthenticate,
        userData,
        setUserData
>>>>>>> d070f74431d8e9db476c8fca2358e9cf8f3c6477
    }}>{children}</userContext.Provider>
}