import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/home';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
