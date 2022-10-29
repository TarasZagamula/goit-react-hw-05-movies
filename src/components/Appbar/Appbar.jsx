import { Header, NavBox, BarLink } from './Appbar.styled';
import { Container } from '../Container/Container.styled';


const Appbar = () => {
  return (
    <Header>
      <Container>
      <NavBox>
        <BarLink to="/">Home</BarLink>
        <BarLink to="/movies">Movies</BarLink>
      </NavBox>
      </Container>
    </Header>
  );
};

export default Appbar;
