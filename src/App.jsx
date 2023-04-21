import { Navigate, Route, Routes } from 'react-router-dom';
import ShopsPage from './pages/ShopsPage';
import AddShopPage from './pages/AddShopPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/layout/Header';
import { useAuthCtx } from './store/AuthProvider';

function App() {
  const { isLoggedIn } = useAuthCtx();

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <ShopsPage /> : <Navigate to={'/login'} />}
        />
        <Route
          path="/add"
          element={isLoggedIn ? <AddShopPage /> : <Navigate to={'/login'} />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to={'/'} /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to={'/'} /> : <RegisterPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
