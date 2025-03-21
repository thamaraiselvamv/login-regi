import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { verifyToken } from '../utils/auth';

interface AuthLayoutProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, requireAuth = false }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const isAuthenticated = token && verifyToken(token);

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};