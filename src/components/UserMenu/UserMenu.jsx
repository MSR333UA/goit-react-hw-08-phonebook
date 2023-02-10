import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { getUsername } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div>
      <p>Welcome {name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
};
