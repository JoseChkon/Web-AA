import {useContext, createContext, useState} from "react"

const userContext = createContext()

export const useUser = ()=>{
    const context = useContext(userContext)
    return context
}

export default function userProvider({children}) {
    const [isAuthenticate, setAuthenticate] = useState(false)
    const [userData, setUserData] = useState({})

    return <userContext.Provider value={{
        isAuthenticate,
        setAuthenticate,
        userData,
        setUserData
    }}>{children}</userContext.Provider>
}