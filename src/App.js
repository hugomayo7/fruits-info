import './App.css';
import Navbar from './components/navbar/Navbar';
import AnimatedSwitch from './utils/AnimatedSwitch'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AnimatedSwitch />
      </BrowserRouter>
    </>
  );
}

export default App;
