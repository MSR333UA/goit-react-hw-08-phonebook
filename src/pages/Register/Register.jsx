import { DivContainer } from 'components/App/App.styled';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    // const { name, value } = evt.target;
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));

    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <DivContainer>
      <h1>Register new account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
        </label>
        <input type="name" name="name" value={name} onChange={handleChange} />
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
        <button type="submit">Sign Up</button>
      </form>
    </DivContainer>
  );
};
