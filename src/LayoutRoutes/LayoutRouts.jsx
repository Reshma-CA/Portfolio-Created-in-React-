import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Sections/Navbar/Navbar';
import Footer from '../Sections/Footer/Footer';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skills from '../Sections/Skills/Skills';
import Contact from '../Sections/Contact/Contact';

const LayoutRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default LayoutRoutes;
