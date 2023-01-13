import React from "react"
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem('dataLogin')
    const alert = {status: false, message: 'You are not authenticated yet!'}
    
    return isAuthenticated ? <Outlet /> : <Navigate to="/" state={{ alert }} />
}

export default ProtectedRoute