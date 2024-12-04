import './E-commerce.css';
import Navbar from './Commponets/Navbar';
// Navbar links
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSingnup from './Pages/LoginSingnup';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Commponets/Footer';
import men_banner from './Commponets/Assets/banner_mens.png'
import women_banner from './Commponets/Assets/banner_women.png'
import kid_banner from './Commponets/Assets/banner_kids.png'


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSingnup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
