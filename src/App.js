import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Languages from './Pages/Languages';
import Sciences from './Pages/Sciences';
import Mathematics from './Pages/Mathematics';
import OurServices from './Pages/OurServices';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/sciences" element={<Sciences />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/ourservices" element={<OurServices />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
