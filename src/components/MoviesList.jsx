import { Link } from 'react-router-dom';
import { Container } from 'components/MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>{' '}
          </li>
        ))}
      </ul>
    </Container>
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

<ul>
  <li>
    <Link to="mission">Read about our mission</Link>
  </li>
</ul>;
