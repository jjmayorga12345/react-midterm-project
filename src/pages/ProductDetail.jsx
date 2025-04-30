import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = useFetch(`products/${id}`);

  if (loading) return <Loading />;
  if (error || !product) return <p>product not found</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
        Back
      </button>

      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        referrerPolicy="no-referrer"
      />
      <p style={{ maxWidth: '600px', marginTop: '20px' }}>
        {product.description}
      </p>
    </div>
  );
};

export default ProductDetail;
