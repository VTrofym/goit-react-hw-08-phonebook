import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/auth-operations';

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <nav>
        <NavLink to="/"></NavLink>
        <ul>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
          <li>
            <NavLink to="/login">Authorization</NavLink>
          </li>
        </ul>
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </nav>
    </header>
  );
};
