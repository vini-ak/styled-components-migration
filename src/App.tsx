// src/routes/Router.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { ProductPage } from './pages/product';
import { CartPage } from './pages/cart';
import { Layout } from './pages';
import "./common/styles/index.scss";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produto/:id" element={<ProductPage />} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="*" element={<div>Página não encontrada</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;