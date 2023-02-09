import { Link } from 'react-router-dom';
import css from 'components/MoviesList/MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  return (
    <div className={css.container}>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

// export const MoviesList = ({ products }) => {
//   return (
//     <Container>
//       {products.map(product => (
//         <CardWrapper key={product.id}>
//           <Link to={`${product.id}`}>
//             <img src="https://via.placeholder.com/200x100" alt="" />
//             <ProductName>{product.name}</ProductName>
//           </Link>
//         </CardWrapper>
//       ))}
//     </Container>
//   );
// };
