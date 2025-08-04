import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Allbooks from './pages/Allbooks';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/cart';
import Profile from './pages/profile';
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetailes';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/all-books" element={<Allbooks />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="view-book-details/:id" element={<ViewBookDetails />} />
        </Routes>
        <Footer />
        </Router>
    </div>
  );
};

export default App;
