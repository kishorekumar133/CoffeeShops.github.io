import './App.css';
import Navigation from './Pages/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Sign from './Pages/Sign';
import Menu from './Pages/Menu';
import Card from './Pages/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from './Pages/Book';
import Login from './Pages/Login';
import Cake from './Pages/Cake';
import Snack from './Pages/Snack';
import Stars from './Pages/Stars';
function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
  <Navigation/>
  <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/sign" element={<Sign/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/card" element={<Card/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Cake" element={<Cake/>}></Route>
        <Route path="/Snack" element={<Snack/>}></Route>
        <Route path="/Stars" element={<Stars/>}></Route>

      </Routes>
     
     </div>
      </BrowserRouter>

  );
}

export default App;
