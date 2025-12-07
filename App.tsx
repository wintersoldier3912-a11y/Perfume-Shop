import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Collections from './pages/Collections';
import About from './pages/About';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={
              <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-serif">Page Not Found</h1>
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;