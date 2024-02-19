import {useContext, createContext, useState} from "react"

const userContext = createContext()

export const useUser = ()=>{
    const context = useContext(userContext)
    return context
}

export default function UserProvider({children}) {
    const [isAuthenticate, setIsAuthenticate] = useState(false)

    return <userContext.Provider value={{
        isAuthenticate,
        setIsAuthenticate
    }}>{children}</userContext.Provider>
}