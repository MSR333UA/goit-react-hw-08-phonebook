import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <header>{isLoggedIn ? <UserMenu /> : <AuthNav />}</header>;
};
