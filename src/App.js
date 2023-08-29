import logo from './logo.svg';
import './App.css';
import data from './dataForProject.js';
import Site_header from './components/site_header';
import Filter_line from './components/filter_line';
import Footer from './components/footer';
import Product_details from './components/product_details';
import { useState } from 'react';
import Form from './components/form';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BodyComp from './components/bodyComp';

function App() {

  return (
    
    <Router>
      <Site_header />
      <Routes>
        <Route path="/" element={<BodyComp/>} />
        <Route path="/update_product" element={<Form />} />
        <Route path="/new_product" element={<Form />} />
        <Route path="/product_details" element={<Product_details />} />
      </Routes>
      <Footer />
    </Router>   
  );
}

export default App;
