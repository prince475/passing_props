// import logo from './logo.svg';

import React from 'react';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    // how you would essentially pass in props from contacts
    <div className="App">
      <Contact
      // this are our props that need to be passed down to the
      // contact child component
        img="./images/mr-whiskerson.jpg"
        phone="(212) 555-1234"
        name="Mr. Whiskerson"
        email="mr.whiskaz@catnap.meow"
       />
    </div>
  );
}

export default App;

