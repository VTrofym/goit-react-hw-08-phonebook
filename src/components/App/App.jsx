import { lazy } from 'react';

import Layout from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { currentUser } from 'redux/auth/auth-operations';
import PrivateRoutes from 'components/PrivateRoutes/PrivateRoutes';
import PublicRoutes from 'components/PublicRoutes/PublicRoutes';

const HomePage = lazy(() => import('../../pages/HomePage'));
const Registration = lazy(() => import('../../pages/Registration'));
const Authorization = lazy(() => import('../../pages/Authorization'));
const Contacts = lazy(() => import('../../pages/Contacts'));
// const PublicRoutes = lazy(() => import('../PublicRoutes'));

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
