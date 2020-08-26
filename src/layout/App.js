import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


function App() {
  return (
    <Router>
      <header>
        {<Header />}
      </header>
      <main>
        {<Main />}
      </main>
      <footer>
        {<Footer />}
      </footer>
    </Router >
  );
}

export default App;
