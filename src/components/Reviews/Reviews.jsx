import { useEffect, useState } from 'react';
import { AuthorBox, ReviewBox, ReviewList, ReviewText } from './Reviews.styled';
import { getReviewsById } from '../filmApi/filmApi';
const { useParams } = require('react-router-dom');

const imgUrl = url => {
  if (!url) {
    return `https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg`;
  }
  if (url.includes(`https://`)) {
    return url.substring(1, url.length);
  }
  return `https://image.tmdb.org/t/p/original${url}`;
};

const Reviews = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviewsById(id).then(setData);
  }, [id]);

  return data.length > 0 ? (
    <ReviewList>
      {data.map(i => (
        <ReviewBox key={i.id}>
          <AuthorBox>
            <h2>{i.author}</h2>
            <img
              src={imgUrl(i.author_details.avatar_path)}
              alt={i.author_details.username}
              width="100%"
            />
          </AuthorBox>
          <ReviewText>{i.content}</ReviewText>
        </ReviewBox>
      ))}
    </ReviewList>
  ) : (
    <ReviewText>
      Is there anybody out there? I think no <span>&#128533;</span>
    </ReviewText>
  );
};

export default Reviews;
