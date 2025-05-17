import { Link } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav
      style={{
        padding: '10px',
        backgroundColor: theme.background,
        color: theme.text,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <Link to="/" style={{ marginRight: '10px', color: theme.text }}>Home</Link>
        <Link to="/products" style={{ color: theme.text }}>Products</Link>
      </div>

      <ToggleSwitch />
    </nav>
  );
};

export default Navbar;
