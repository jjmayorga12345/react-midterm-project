import { Link } from 'react-router-dom';
import { Product } from '../types/Product';

interface Props {
  product: Product;
}

const ProductListRow = ({ product }: Props) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
      />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <Link to={`/products/${product.id}`}>View Product</Link>
      </div>
    </div>
  );
};

export default ProductListRow;
