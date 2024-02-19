import React from 'react'
import { useUser } from '../providers/UserProvider'

export default function ProtectedRoutes() {
    const {isAuthenticate} = useUser()
  return (
    <div>ProtectedRoutes</div>
  )
}
