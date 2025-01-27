import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import PageNotFound from './pages/notFound/PageNotFound'
import HomePage from './pages/home/HomePage'
import ProductInfo from './pages/productInfoPage/ProductInfo'
import ScrollTop from './components/scrollTop/ScrollTop'
import CartPage from './pages/cart/CartPage'
const App = () => {
  return (
   <Router>
    <ScrollTop/>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/*" element={<PageNotFound />} />
       <Route path="/ProductInfoPage" element={<ProductInfo />} />
       <Route path="/cart" element={<CartPage />} />
     </Routes>
   </Router>
  )
}

export default App