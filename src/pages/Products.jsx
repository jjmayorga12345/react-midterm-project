import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

const Products = () => {
  const { data, loading, error } = useFetch('products');

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {data?.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                width: '200px',
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
