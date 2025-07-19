import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../firebase"
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const [user, laoding, error] = useAuthState(auth)
    return (
        <>
            {user ? <Outlet /> : <Navigate to="login" />}
        </>
    )
}

export default PrivateRoute