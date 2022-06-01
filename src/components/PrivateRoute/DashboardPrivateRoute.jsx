import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const DashboardPrivateRoute = () => {
    const userData = localStorage.getItem('AuthToken');
    const FirstStep = localStorage.getItem('FirstStep');

    return (userData && !FirstStep) ? <Outlet /> : <Navigate to="/"/>;
}

export default DashboardPrivateRoute;
