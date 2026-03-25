// import React from 'react';

import Demo from "./Demo";  
import Header from './component/Header';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Hero from './component/Hero';

const App = () => {
  
  let marks = 85;

  return (
    <div>
      {/* <h1>I am a learning new react</h1>
      <input placeholder="My Name"/>
      <button>Click me</button> */}

      {/* <Header></Header>
      <Hero></Hero>
      <ContactForm></ContactForm>
      <Footer></Footer> */}




      {/* component thinking in react */}

      <h1>Welcome to My App</h1>
      <h2>This is the hero section</h2>
      <p>This is the contact form section</p>
      <p className="section-details">This is the footer section</p>
      <p style={{ color: 'red', fontSize: '26px' }}>This color is red</p>





      {/* jsx written rules */}

      {marks>80 ? <p style={{ color: 'green' }}>You are passed</p> : <p style={{ color: 'red' }}>You are failed</p>}




      {/* jsx turnary operator */}
      {(marks > 80) ? <p style={{ color: 'green' }}>You are passed</p> : <p style={{ color: 'red' }}>You are failed</p>}



      {/* IIF function in jsx */}
      

    </div>
  );
};

export default App;