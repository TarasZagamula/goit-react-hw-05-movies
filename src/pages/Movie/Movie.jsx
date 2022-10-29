import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getFilmByQuerry } from '../../components/filmApi/filmApi';
import { Container } from '../../components/Container/Container.styled';
import Gallery from '../../components/Gallery/Gallery';
import SearchForm from '../../components/SearchForm/SearchForm';

const Movie = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const querryParams = searchParams.get('querry') ?? '';

  useEffect(() => {
    if (!querryParams || querryParams === '') {
      return;
    }
    getFilmByQuerry(querryParams).then(setData);
  }, [querryParams]);

  const onSubmit = value => {
    setSearchParams({ querry: value });
  };

  return (
    <Container>
      <SearchForm onSubmit={onSubmit} placeHolder={querryParams}/>
      <Outlet />
      {data && <Gallery data={data} way={``}/>}
    </Container>
  );
};

export default Movie;
