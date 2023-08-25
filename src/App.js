import { motion } from 'framer-motion'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <motion.img
        // src='https://papajoule.ru/upload/iblock/e7e/photo_2022_06_07_12_21_18.jpg'
        src={logo}
        alt=''
        animate={{ rotate: 360 }}
      />
    </div>
  );
}

export default App;
