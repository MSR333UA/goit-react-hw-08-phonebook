import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkElem = styled(NavLink)`
  font-weight: 500;
  font-size: 22px;
  margin-right: 50px;

  &.active {
    color: red;
  }
`;
