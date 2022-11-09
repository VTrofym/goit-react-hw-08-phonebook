// import { lazy } from 'react';
// import { Suspense } from 'react';
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

import css from './App.module.css';
import Layout from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Registration } from 'pages/Registration';
import { Login } from 'pages/Login';

// const Register = lazy(() => import('../../pages/Register'));
// const Login = lazy(() => import('../../pages/Login'));
// const Contacts = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  return (
    // <Layout>
    // <Routes>
    //   <Route path="/registration" element={<Registration />} />
    //   <Route path="/login" element={<Login />} />
    // </Routes>
    <div className={css.allContent}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
    // {/* </Layout> */}
  );
};
