<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TweetsProvider } from './context/TweetsContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './index.css';

function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const savedUserName = localStorage.getItem('userName');
    if (savedUserName) {
      setUserName(savedUserName);
    } else {
      setUserName('User');
      localStorage.setItem('userName', 'User');
    }
  }, []);

  const updateUserName = (newUserName) => {
    setUserName(newUserName);
    localStorage.setItem('userName', newUserName);
  };

  return (
    <Router>
      <TweetsProvider userName={userName}>
        <div className="app">
          <Navbar />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/profile"
                element={
                  <Profile
                    userName={userName}
                    onUpdateUserName={updateUserName}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </TweetsProvider>
    </Router>
  );
}

export default App;
>>>>>>> 5f839ec9d98a32effb4d69a107bcf999812ab998
