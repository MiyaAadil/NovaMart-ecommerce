import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Loading from '../components/Loading';

const Home = lazy(() => import("../pages/Home"))
const Products = lazy(() => import('../pages/Products'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Cart = lazy(() => import('../pages/Cart'));
const NotFound = lazy(() => import('../pages/NotFound'));
const About = lazy(() => import('../pages/About'));
const Wishlist = lazy(() => import('../pages/Wishlist'));

const AppRoutes = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
        <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route path='/wishlist' element={<Wishlist />} />
        </Route>
        
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default AppRoutes;
