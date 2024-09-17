import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { Contact } from './Pages/Contact';
import About from './Pages/About';
import Products from './Pages/Products';
import ContactCredentials from './components/ContactCredentials';
import SingleProduct from './Pages/SingleProduct'; 
import Cart from './Pages/Cart';
import { CartProvider } from './context/CartContext'; 
import Login from './Pages/Login.js';
import Register from './Pages/Register';
import { AuthProvider } from './context/AuthContext.js';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <CartProvider> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} /> 
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register/>} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />}>
                <Route path="." element={<ContactCredentials />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
