import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
import { useTheme } from '../context/ThemeContext';

const ProductDetail = () => {
  const { theme } = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = useFetch(`products/${id}`);

  if (loading) return <Loading />;
  if (error || !product) return <p style={{ color: theme.text }}>product not found</p>;

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text, minHeight: '100vh', padding: '1rem' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '20px',
          backgroundColor: theme.text,
          color: theme.background,
          padding: '8px 12px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Back
      </button>

      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        referrerPolicy="no-referrer"
      />
      <p style={{ maxWidth: '600px', marginTop: '20px' }}>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
