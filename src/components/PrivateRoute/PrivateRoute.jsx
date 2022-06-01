import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const userData = localStorage.getItem('AuthToken')

    return userData ? <Outlet /> : <Navigate to="/"/>;
}

export default PrivateRoute;
