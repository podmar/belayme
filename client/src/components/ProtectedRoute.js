import React from 'react';
import useIsAuthenticated from '../utils/useIsAuthenticated';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
  const isAuthenticated = useIsAuthenticated();
  
    return (
    <>
    {isAuthenticated ? children : <Navigate to="/login"/>}
    </>
  )
}

export default ProtectedRoute;