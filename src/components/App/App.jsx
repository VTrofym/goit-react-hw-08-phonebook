// import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
// import { Suspense } from 'react';
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

import css from './App.module.css';
// import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
// import LoginForm from 'components/RegistrationForm/LoginForm/LoginFomr';

// import Register from 'pages/Register';
// import Login from 'pages/Login';

// const Register = lazy(() => import('../../pages/Register'));
// const Login = lazy(() => import('../../pages/Login'));
// const Contacts = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  return (
    <div className={css.allContent}>
      {/* <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={} />
        </Routes>
      </Suspense> */}
      {/* <RegistrationForm />
      <LoginForm /> */}
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
