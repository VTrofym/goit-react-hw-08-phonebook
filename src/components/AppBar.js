import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import AuthNav from "./AuthNav";
import { Navigation } from "./Navigations";
import UserMenu from "./UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </header>
  )
}