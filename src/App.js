import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Navigation';
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Sign from './Pages/Sign';
import Menu from './Pages/Menu';
import Card from './Pages/Card';
import Book from './Pages/Book';
import Login from './Pages/Login';
import Cake from './Pages/Cake';
import Snack from './Pages/Snack';
import Stars from './Pages/Stars';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import { CartProvider } from './CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return <CartProvider>
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/book" element={<Book />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cake" element={<Cake />} />
          <Route path="/Snack" element={<Snack />} />
          <Route path="/Stars" element={<Stars />} />
        </Routes>
      </div>
    </BrowserRouter>
  </CartProvider>;
}

export default App;
