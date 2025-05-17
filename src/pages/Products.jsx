import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useTheme } from '../context/ThemeContext';

const Products = () => {
  const { theme } = useTheme();
  const { data, loading, error } = useFetch('products');

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text, minHeight: '100vh', padding: '1rem' }}>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {data?.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            style={{ textDecoration: 'none', color: theme.text }}
          >
            <div
              style={{
                border: `1px solid ${theme.text}`,
                padding: '10px',
                width: '200px',
                backgroundColor: theme.background,
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                }}
                referrerPolicy="no-referrer"
              />
              <h3>{product.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
