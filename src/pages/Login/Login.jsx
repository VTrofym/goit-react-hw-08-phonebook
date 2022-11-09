import React from 'react';

export default function LoginForm() {
  const handleInputLogin = evt => {
    inputs[evt.target.name](evt.target.value.trim());
  };

  const handleFormSubmitLogin = evt => {
    evt.preventDefault();
    const userInfo = {
      email,
      password,
    };
    dispatch(login(userInfo));
  };

  return (
    <form>
      <h3>Увійти</h3>
      <form onSubmit={handleFormSubmitLogin} className={css.form}>
        <label className={css.label}>
          Введіть імя
          <input
            className={css.input}
            type="text"
            required
            onChange={handleInputLogin}
            name="name"
            // value={name}
          />
        </label>
        <label className={css.label}>
          Введіть пошту
          <input
            className={css.input}
            required
            onChange={handleInputLogin}
            name="email"
            // value={email}
            type="email"
          />
        </label>
        <label className={css.label}>
          Введіть пароль
          <input
            className={css.input}
            required
            onChange={handleInputLogin}
            name="password"
            // value={password}
            type="password"
          />
        </label>
        <button type="submit" className={css.button}></button>
      </form>
    </form>
  );
}
