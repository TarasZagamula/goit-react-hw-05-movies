import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin-right: -8px;
  margin-bottom: -8px;
`;
export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: calc(100% / 2 - 30px);
  border: 2px solid;
  border-radius: 8px;
  background-color: white;
  color: black;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 4px;
  :hover,
  :focus {
    background-color: white;
    color: black;
  }

  @media screen and (min-width: 480px) {
    width: calc(100% / 3 - 30px);
  }

  @media screen and (min-width: 768px) {
    width: calc(100% / 4 - 30px);
  }

  @media screen and (min-width: 1200px) {
    width: calc(100% / 6 - 30px);
  }
`;
