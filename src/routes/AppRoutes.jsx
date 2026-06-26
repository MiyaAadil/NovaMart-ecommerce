import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'
import About from '../pages/About'

const AppRoutes = () => {
  return (
    <div>
      <Routes>

        <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
        </Route>
        
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;
