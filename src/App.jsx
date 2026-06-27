import React from 'react'
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <div>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </div>
  )
}

export default App;
