import React from 'react'; 
import './scss/app.scss'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { Routes, Route} from 'react-router-dom'


function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
        </div>
      
    </div>
  );
}

export default App;
