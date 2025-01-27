import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import PageNotFound from './pages/notFound/PageNotFound'
import HomePage from './pages/home/HomePage'
import ProductInfo from './pages/productInfoPage/ProductInfo'
import ScrollTop from './components/scrollTop/ScrollTop'
import CartPage from './pages/cart/CartPage'
import AllProductsPage from './pages/allProducts/AllProductsPage'
import SignUp from './pages/registration/SignUp'
import Login from './pages/registration/Login'
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
const App = () => {
  return (
   <Router>
    <ScrollTop/>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/*" element={<PageNotFound />} />
       <Route path="/ProductInfoPage" element={<ProductInfo />} />
       <Route path="/cart" element={<CartPage />} />
       <Route path="/allProducts" element={<AllProductsPage />} />
       <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />
       <Route path="/user-dashboard" element={<UserDashboard />} />
       <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
     </Routes>
   </Router>
  )
}

export default App