import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = ({ children, location }) => {
  return (
    <div className="App">
      <Header location={ location } />
        <main className="main">
            { children }
        </main>
      <Footer />
    </div>
  )
};

export default Main;
