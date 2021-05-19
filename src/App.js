import React from 'react';
import './App.css';
import Routes from './components/routes/index'
import Navigation from './components/resources/Header/Header'
import Footer from './components/resources/footer/Footer'

function App() {
  return (
    <>
    <Navigation/>
    <Routes />;
    <Footer />
  </>
  )
}

export default App;


