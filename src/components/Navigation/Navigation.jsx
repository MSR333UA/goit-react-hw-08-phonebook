import { DivContainer } from 'components/App/App.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { routes } from 'service/routes';
import { NavLinks } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <DivContainer>
        {isLoggedIn ? (
          <>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLinks to={routes.LOGIN}>Login </NavLinks>
            <NavLinks to={routes.REGISTER}> Registrations</NavLinks>
          </>
        )}
      </DivContainer>
    </nav>
  );
};
