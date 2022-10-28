import { Container } from '../../components/Container/Container.styled';
import { useState, useEffect } from 'react';
import { getFilmByTrending } from '../../components/filmApi/filmApi';
import Gallery from '../../components/Gallery/Gallery';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getFilmByTrending().then(setData);
  }, []);

  return (
    <Container>{data && <Gallery data={data} way={`movies/`} />}</Container>
  );
};

export default Home;
