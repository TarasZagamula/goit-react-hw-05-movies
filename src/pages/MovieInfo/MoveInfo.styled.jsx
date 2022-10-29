import styled from '@emotion/styled';
import { FaAngleLeft } from 'react-icons/fa';

export const BackArrow = styled(FaAngleLeft)`
  position: absolute;
  top: 8px;
  left: 8px;
  fill: white;
  width: 24px;
  height: 24px;
`;
export const MovieTitle = styled.h1`
  font-size: 26px;
  display: flex;
  align-items: center;
  margin: 0;
`;
export const MovieSecondTitle = styled.h2`
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
`;
export const MovieDescription = styled.p`
  font-size: 16px;
  display: flex;
`;
export const MovieSpan = styled.span`
  font-size: 16px;
  font-weight: normal;
  margin-left: 8px;
`;
export const MovieImg = styled.img`
  object-fit: contain;
  max-width: 100%;

  @media screen and (min-width: 480px) {
    max-width: 40%;
  }
`;
export const MovieBox = styled.div`
  margin-top: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`;
export const MovieDescriptionBox = styled.div`
  padding: 8px;
  justify-content: space-between;
  text-align: justify;
  display: flex;
  flex-direction: column;
`;
export const WrapperBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid;
  border-radius: 8px;
  padding-top: 24px;
  background-color: black;
  color: white;
`;
