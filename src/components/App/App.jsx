// import { lazy } from 'react';
// import { Suspense } from 'react';
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

import css from './App.module.css';
import Layout from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Registration } from 'pages/Registration';
import { Authorization } from 'pages/Authorization';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { currentUser } from 'redux/auth/auth-operations';

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
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Authorization />} />
        </Routes>
      </Suspense>
      <div className={css.allContent}>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </Layout>
  );
};
