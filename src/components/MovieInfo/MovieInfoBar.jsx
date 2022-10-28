import {Header, NavBox, BarLink} from '../Appbar/Appbar.styled';

const InfoBar = () => {
    return (
      <Header>
        <NavBox>
          <BarLink to="cast" end>Cast</BarLink>
          <BarLink to="reviews">Reviews</BarLink>
        </NavBox>
      </Header>
    );
  };
  
  export default InfoBar;