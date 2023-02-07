import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day',
  params: {
    api_key: '1798748ad7a054d7f6a9e9dee1e1d177',
  },
});

export const getTrendMovies = async () => {
  const { data } = await instance.get('', {});
  return data;
};

const instanceByID = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '1798748ad7a054d7f6a9e9dee1e1d177',
  },
});

export const getMovieById = async id => {
  const { data } = await instanceByID.get(`/${id}`, {});
  return data;
};

// export const searchImages = async (search, page) => {
//   const { data } = await instance.get('/', {
//     params: { query: search, page: page },
//   });
//   return data;
// };

// fetch(
//   `https://pixabay.com/api/?key=31955836-4f23a30b6c1dc45c2c659779e&q=${this.props.filter}&image_type=photo&per_page=12&page=1`
// )
//   .then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(
//       new Error(`Нет фото соответствующих ${this.props.filter}`)
//     );
//   })
//   .then(data => {
//     this.setState({ images: data.hits });
//   })
//   .catch(error => {
//     this.setState({ error });
//   })
//   .finally(() => this.setState({ loading: false }));
