import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import ShopCategory from './Pages/ShopCategory'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/men' element={<ShopCategory category="men"/>}></Route>
            <Route path='/women' element={<ShopCategory category="women"/>}></Route>
            <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>
              <Route  path=':productId' element={<Product/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<LoginSignup/>}></Route>  
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
