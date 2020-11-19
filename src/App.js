import React from 'react';
import './index.css';
import Navbar from './components/navbar/Navbar';
import ImgContainer from './components/imgContainer/ImgContainer';
import ProductPage from './components/products/ProductPage';
import AboutSection from './components/aboutSection/AboutSection';
import AddCard from './components/advertisment/AddCard';
import InstagramSection from './components/instagramSection/InstagramSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/footer/Footer';
import 'tachyons';
require('typeface-muli');


function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <ImgContainer/>
      <div className="bg-circle w-100 pa4">
        <ProductPage/>
        <AboutSection/>
        <AddCard/>
      </div>
      <InstagramSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
