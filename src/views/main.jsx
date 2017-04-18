import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import styles from '../styles/main.css';

const Main = ({ children, location }) => {
  return (
    <div className={styles.App}>
      <Header location={ location } />
        <main className={styles.main}>
            { children }
        </main>
      <Footer />
    </div>
  )
};

export default Main;
