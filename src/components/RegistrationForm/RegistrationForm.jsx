import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/auth-operations';
import css from './RegistrationForm';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const inputs = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };
  const handleInput = evt => {
    inputs[evt.target.name](evt.target.value.trim());
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const userInfo = {
      name,
      email,
      password,
    };
    dispatch(registration(userInfo));
  };

  return (
    <>
      <h3>Реєстрація</h3>
      <form onSubmit={handleFormSubmit} className={css.form}>
        <label className={css.label}>
          Введіть імя
          <input
            className={css.input}
            type="text"
            required
            onChange={handleInput}
            name="name"
            value={name}
          />
        </label>
        <label className={css.label}>
          Введіть пошту
          <input
            className={css.input}
            required
            onChange={handleInput}
            name="email"
            value={email}
            type="email"
          />
        </label>
        <label className={css.label}>
          Введіть пароль
          <input
            className={css.input}
            required
            onChange={handleInput}
            name="password"
            value={password}
            type="password"
          />
        </label>
        <button type="submit" className={css.button}></button>
      </form>
    </>
  );
}