import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1500);
  }, [navigate]);

  return (
    <main style={{ textAlign: 'center' }}>
      <b style={{ fontSize: 48 }}>404</b>
      <p>Sorry, we couldn't find that page...</p>
    </main>
  );
};

export default NotFound;
