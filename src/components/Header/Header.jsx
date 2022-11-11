import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/auth-operations';

export const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  return (
    <header>
      <nav>
        <NavLink to="/"></NavLink>
        <ul>
          {!token && (
            <li>
              <NavLink to="/registration">Registration</NavLink>
            </li>
          )}
          {!token && (
            <li>
              <NavLink to="/login">Authorization</NavLink>
            </li>
          )}
        </ul>
        {token && (
          <button type="button" onClick={() => dispatch(logout())}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};
