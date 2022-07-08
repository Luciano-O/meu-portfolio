import React from 'react';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
    </>
  );
}

export default App;
