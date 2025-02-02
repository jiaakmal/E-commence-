import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/notFound/PageNotFound";
import HomePage from "./pages/home/HomePage";
import ProductInfo from "./pages/productInfoPage/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProductsPage from "./pages/allProducts/AllProductsPage";
import SignUp from "./pages/registration/SignUp";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import CategoryPage from "./pages/category/CategoryPage";
import EditProduct from "./pages/admin/EditProduct";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import ProtectedRouteForUser from "./protectedRoute/ProtectedRouteForUser";
import ProtectedRouteForAdmin from "./protectedRoute/ProtectedRouteForAdmin";
const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/productInfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allProducts" element={<AllProductsPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<CategoryPage />} />
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
             <EditProduct/>
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;
