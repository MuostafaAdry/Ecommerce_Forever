import React,{useState} from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Collections from './Pages/Collections';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Search from './Components/Home/Search/Search';
import { ToastContainer } from 'react-toastify';
const App = () => {
  const [ShowSearch, setShowSearch] = useState(true);
  const[SearchValue,setSearchValue]=useState("")
  return (
    <div>
      <ToastContainer/>
      <Navbar ShowSearch={ShowSearch} setShowSearch={setShowSearch}  />

      <Search SearchValue={SearchValue} setSearchValue ={setSearchValue}
      ShowSearch={ShowSearch} setShowSearch={setShowSearch}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Collections' element={<Collections
        ShowSearch={ShowSearch}
        SearchValue={SearchValue}
        />}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Product/:ProductId' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Place_Order' element={<PlaceOrder/>}/>
        <Route path='/Orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
