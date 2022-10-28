import { useEffect, useState } from 'react';
import { CastList, CastItem } from './Cast.styled';
import { getCastsById } from '../filmApi/filmApi';
const { useParams } = require('react-router-dom');

const Cast = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getCastsById(id).then(setData);
  }, [id]);

  return (
    <CastList>
      {data &&
        data.map(i => (
          <CastItem key={i.id}>
            <img
              src={
                i.profile_path
                  ? `https://image.tmdb.org/t/p/original${i.profile_path}`
                  : `https://static8.depositphotos.com/1009634/988/v/600/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg`
              }
              alt={i.name}
            />
            <p>{i.name ?? i.original_name}</p>
          </CastItem>
        ))}
    </CastList>
  );
};

export default Cast;
