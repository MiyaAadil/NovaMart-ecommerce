import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from './context/WishlistContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <Toaster position="bottom-center" toastOptions={{
          duration: 2000,
          style: {
            borderRadius: "20px",
            color: "green",
          },
        }} />
            <App /> 
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  </StrictMode>,
)
