import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GalleryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -8px;
  margin-bottom: -8px;
`;

export const GalleryLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
  border: 2px solid;
  border-radius: 8px;
  background-color: black;
  color: white;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 4px;
  :hover,
  :focus {
    background-color: white;
    color: black;
  }

  @media screen and (min-width: 480px) {
    width: calc(100% / 2 - 30px);
  }

  @media screen and (min-width: 768px) {
    width: calc(100% / 3 - 30px);
  }

  @media screen and (min-width: 1200px) {
    width: calc(100% / 4 - 30px);
  }
`;
