import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// для  зарегестрированных
export default function PrivateRoutes() {
  const isLoggedIn = useSelector(); /// прописать
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
