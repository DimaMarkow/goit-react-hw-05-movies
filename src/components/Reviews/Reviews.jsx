import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsById } from 'services/moviesApi';
import css from 'components/Reviews/Reviews.module.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // setLoading(true);
    getReviewsById(id)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
    // .finally(() => setLoading(false));
  }, [id]);

  if (reviews.length === 0) {
    return (
      <p className={css.detailBasicBold}>
        We don't have any reviews for this movie ...
      </p>
    );
  }
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p className={css.detailBasicBold}>{review.author}</p>
          <p className={css.detailBasic}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
