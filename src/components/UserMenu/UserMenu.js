import { useDispatch, useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUsername)

  return (
    <div>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  )
}