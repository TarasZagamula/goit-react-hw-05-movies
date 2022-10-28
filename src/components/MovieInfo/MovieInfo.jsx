import { useEffect, useState } from 'react';
import { getFilmInfoById } from '../filmApi/filmApi';
import { Container } from 'components/Container/Container.styled';
import InfoBar from './MovieInfoBar';
import {
  MovieBox,
  MovieDescription,
  MovieImg,
  MovieSecondTitle,
  MovieTitle,
  MovieDescriptionBox,
  MovieSpan,
  WrapperBox,
  BackArrow,
} from './MoveInfo.styled';

const { useParams, Outlet, useLocation, Link } = require('react-router-dom');

const MovieInfo = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    getFilmInfoById(id).then(setData);
  }, [id]);

  return (
    data && (
      <Container>
        <MovieTitle>
          {data.original_title}{' '}
          <MovieSpan>{`(${data.release_date.substring(0, 4)})`}</MovieSpan>
        </MovieTitle>
        <WrapperBox>
          <Link to={location.state?.from ?? '/'}>
            <BackArrow />
          </Link>
          <MovieBox>
            <MovieImg
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt={data.title}
            />
            <MovieDescriptionBox>
              <div>
                <MovieSecondTitle>Overview:</MovieSecondTitle>
                <MovieDescription>{data.overview}</MovieDescription>
              </div>
              <MovieSecondTitle>
                User Score: {data.popularity.toFixed(1)}%
              </MovieSecondTitle>
              <MovieSecondTitle>
                Genres:{' '}
                <MovieSpan>
                  {data.genres.map(i => {
                    return `${i.name} `;
                  })}
                </MovieSpan>
              </MovieSecondTitle>
            </MovieDescriptionBox>
          </MovieBox>
          <InfoBar />
          <Outlet />
        </WrapperBox>
      </Container>
    )
  );
};

export default MovieInfo;
