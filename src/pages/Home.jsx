import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();

  return <h1 style={{ color: theme.text }}>Wecome to the main page</h1>;
};

export default Home;
