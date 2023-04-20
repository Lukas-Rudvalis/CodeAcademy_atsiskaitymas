import { Route, Routes } from 'react-router-dom';
import './styles/reset.css';
import Favicon from 'react-favicon';
import ShopsPage from './pages/ShopsPage';
import AddShopPage from './pages/AddShopPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <Favicon url="/favicon.ico" />
      <Routes>
        <Route path="/" element={<ShopsPage />} />
        <Route path="/add" element={<AddShopPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
