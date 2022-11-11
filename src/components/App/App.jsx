// import { lazy } from 'react';

import css from './App.module.css';
import Layout from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Registration } from 'pages/Registration';
import { Authorization } from 'pages/Authorization';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { currentUser } from 'redux/auth/auth-operations';
import HomePage from 'pages/HomePage/HomePage';
import Contacts from 'pages/Contacts';
import PrivateRoutes from 'components/PrivateRoutes/PrivateRoutes';
import PublicRoutes from 'components/PublicRoutes/PublicRoutes';

// const Register = lazy(() => import('../../pages/Register'));
// const Login = lazy(() => import('../../pages/Login'));
// const Contacts = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(currentUser());
    }
  }, [dispatch, token]);

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Authorization />} />
          </Route>
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};
