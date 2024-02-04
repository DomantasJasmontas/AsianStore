import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Front/HomePage';
import ProductsPage from './pages/Products/ProductsPage'
import CartPage from './pages/Cart/CartPage';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/tag/:tag" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />

    </Routes>
  );
}