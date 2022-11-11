import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// для не зарегестрированных
export default function PublicRoutes() {
  const isLoggedIn = useSelector(); /// прописать
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
}
