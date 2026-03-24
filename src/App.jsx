// import React from 'react';

import Demo from "./Demo";  
import Header from './component/Header';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Hero from './component/Hero';

const App = () => {
  return (
    <div>
      {/* <h1>I am a learning new react</h1>
      <input placeholder="My Name"/>
      <button>Click me</button> */}

      {/* <Demo></Demo> */}

      <Header></Header>
      <Hero></Hero>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default App;