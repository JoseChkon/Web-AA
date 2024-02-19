import {useContext, createContext, useState} from "react"

const userContext = createContext()

export const useUser = ()=>{
    const context = useContext(userContext)
    return context
}

export default function UserProvider({children}) {
    const [isAuthenticate, setIsAuthenticate] = useState(false)
    const [userData, setUserData] = useState({})

    return <userContext.Provider value={{
        isAuthenticate,
        setIsAuthenticate,
        userData,
        setUserData
    }}>{children}</userContext.Provider>
}