import Dashboard from './components/dashboard/Dashboard'
import Cart from './components/cart/Cart'
import Login from './components/auth/Login'
import Profile from './components/user/Profile'
import Register from './components/auth/Register'
import ProductList from './components/product/List'
import ProductDetail from './components/product/Detail'
import Checkout from './components/checkout/Checkout'
import Order from './components/order/Order'
import ProtectedRoute from './components/ProtectedRoutes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />  
          <Route path="/register" exact element={<Register />} />  
          {/* Route to protect unathenticated user   */}
          <Route exact path='/' element={<ProtectedRoute/>}>
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/checkout" exact element={<Checkout />} />
            <Route path="/order" exact element={<Order />} />
            <Route path="/product/list" exact element={<ProductList />} />
            <Route path="/product/detail" exact element={<ProductDetail />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
