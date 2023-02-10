import { routes } from 'service/routes';
import { LinkElem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <LinkElem to={routes.REGISTER}>Registration</LinkElem>
      <LinkElem to={routes.LOGIN}>Login</LinkElem>
    </div>
  );
};
