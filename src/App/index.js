import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { getAuthor } from '../helpers/data/AuthorData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthor().then((response) => setAuthors(response));
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes
          authors={authors}
          setAuthors={setAuthors}
        />
      </Router>
    </>
  );
}

export default App;
