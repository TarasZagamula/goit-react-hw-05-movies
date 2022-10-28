import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: flex-start;
  padding: 8px;
  margin-bottom: 8px;
  background-color: black;
`;
export const NavBox = styled.nav`
  display: flex;
`;
export const BarLink = styled(NavLink)`
  text-decoration: none;
  border: 2px solid;
  border-radius: 8px;
  background-color: black;
  color: white;
  margin-right: 8px;
  padding: 4px;

  &.active {
    background-color: white;
    color: black;
  }
`;
