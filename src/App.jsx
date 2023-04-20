import { Routes } from 'react-router-dom';
import './styles/reset.css';
import Favicon from 'react-favicon';

function App() {
  return (
    <div>
      <Favicon url="/favicon.ico" />
      <Routes></Routes>;
    </div>
  );
}

export default App;
