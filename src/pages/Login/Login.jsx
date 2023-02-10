import { DivContainer } from 'components/App/App.styled';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        Notify.failure('🐷 Error happened. Please try again');
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));

    // setEmail('');
    // setPassword('');
  };

  return (
    <DivContainer>
      <h1>Page Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label>
          <p>Password</p>
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </DivContainer>
  );
};
