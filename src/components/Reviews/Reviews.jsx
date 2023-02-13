import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import { getReviewsById } from 'services/moviesApi';
import css from 'components/Reviews/Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getReviewsById(id)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (reviews.length === 0 && !loading) {
    return (
      <p className={css.detailBasicBold}>
        We don't have any reviews for this movie ...
      </p>
    );
  }
  return (
    <>
      {loading && <Loader />}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p className={css.detailBasicBold}>{review.author}</p>
            <p className={css.detailBasic}>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
