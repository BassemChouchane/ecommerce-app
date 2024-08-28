import './App.css';
import Layout from './components/Layout';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { Contact } from './Pages/Contact';
import About from './Pages/About';
import Products from './Pages/Products';
import ContactCredentials from './components/ContactCredentials';
import SingleProduct from './Pages/SingleProduct';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} >
            {/*   */}
          </Route>
          <Route path="about" element={<SingleProduct />} />
          <Route path="contact" element={<Contact />} >
            <Route path="." element={<ContactCredentials />} />
          </Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
