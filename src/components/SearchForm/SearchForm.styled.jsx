import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

export const SearchFormStyled = styled.form`
  display: inline-flex;
  text-align: center;
  align-items: center;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: black;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  border: 0;
  border-radius: 8px;
  outline: none;
  width: 70%;
  height: 22px;

  :hover,
  :focus {
    background-color: black;
    border: 2px solid white;
    color: white;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  border: 0;
  border-radius: 50%;
  margin-left: 8px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const ButtonLabelStyled = styled(FaSearch)`
  fill: red;
  position: absolute;
  left: 6px;
  top: 6px;
  width: 12px;
  height: 12px;
`;
