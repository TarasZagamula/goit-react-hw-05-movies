import styled from '@emotion/styled';

export const AuthorBox = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: calc(100% / 6);

  @media screen and (min-width: 480px) {
    width: calc(100% / 4);
  }
`;
export const ReviewList = styled.ul`
  list-style: none;
  padding: 8px;
`;
export const ReviewBox = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`;
export const ReviewText = styled.p`
  padding: 8px;
`;
