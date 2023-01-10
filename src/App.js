import Dashboard from './components/dashboard/Dashboard'
import Cart from './components/cart/Cart'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />  
          <Route path="/register" exact element={<Register />} />  
          {/* Route to protect unathenticated user   */}
          {/* <Route exact path='/' element={<ProtectedRoute/>}> */}
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/cart" exact element={<Cart />} />
          {/* </Route> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
