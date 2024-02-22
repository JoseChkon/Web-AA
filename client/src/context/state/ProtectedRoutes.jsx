import { useUser } from '../providers/UserProvider'
import {Outlet} from 'react-router-dom'
import { useState } from 'react'

export default function ProtectedRoutes() {
    const {isAuthenticate} = useUser()

    return isAuthenticate ? <Outlet/> : <h1>No autentificado</h1>
}
