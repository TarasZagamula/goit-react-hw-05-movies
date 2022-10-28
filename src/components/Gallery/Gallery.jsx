import { useLocation } from 'react-router-dom';
import { GalleryLink, GalleryBox } from './Gallery.styled';

const Gallery = ({ data, way }) => {
  const location = useLocation();
  console.log(location);
  return (
    <GalleryBox>
      {data &&
        data.map(i => (
          <GalleryLink
            to={`${way}${i.id}`}
            key={i.id}
            state={{ from: location }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${i.poster_path}`}
              alt={i.name ?? i.title}
              width="100%"
            />
            <p>{i.name ?? i.title}</p>
          </GalleryLink>
        ))}
    </GalleryBox>
  );
};

export default Gallery;
