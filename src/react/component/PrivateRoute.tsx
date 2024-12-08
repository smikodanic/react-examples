import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


interface PrivateRouteProps {
  element: React.ReactNode;
}


const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  // redirect to Login page if not authenticated
  if (!isAuthenticated) { return <Navigate to="/example-routing-login" />; }

  // render the protected route element if authenticated
  return <>{element}</>;
};


export default PrivateRoute;
