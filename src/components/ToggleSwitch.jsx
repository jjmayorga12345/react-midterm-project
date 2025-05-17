import { useTheme } from '../context/ThemeContext';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const { toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input type="checkbox" onChange={toggleTheme} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
