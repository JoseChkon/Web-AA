import React from 'react'
import { useUser } from '../providers/UserProvider'
import {Outlet} from 'react-router-dom'

export default function ProtectedRoutes() {
    const {isAuthenticate} = useUser()
    const [loanding, setLoanding] = useState(true)

    const authenticate = async () =>{
      await getUser()
    }
    
    !isAuthenticate ? authenticate() : setLoanding(false)

    return <Outlet/>
}
