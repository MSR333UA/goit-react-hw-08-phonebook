import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinks = styled(Link)`
  padding: 10px;
  color: white;
  text-decoration: none;
  &:hover {
    color: #00e8ff;

    border-radius: 15px;
    background: #7a44848c;
  }
`;
