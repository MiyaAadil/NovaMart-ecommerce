import React from 'react'
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <CartProvider>
        <ScrollToTop />
        <AppRoutes />
      </CartProvider>
    </div>
  )
}

export default App;
