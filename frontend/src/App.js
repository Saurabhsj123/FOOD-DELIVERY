import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/PlaceOrder/Placeorder';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './Pages/Verify/Verify';
import Myorders from './Pages/MyOrders/Myorders';

function App() {

  const [showLogin, setShowLogin] = useState(false)
  

  return (
    <> 
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}

      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/order' element={<Placeorder/>} />
              <Route path='/verify' element={<Verify/>} />
              <Route path='/myorders' element={<Myorders/>} />
          </Routes>
      </div>
        <Footer/>
    </>
  );
}

export default App;
