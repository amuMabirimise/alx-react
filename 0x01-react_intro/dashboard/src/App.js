import React from 'react';
import './App.css';
import HolbertonLogo from './holberton-logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HolbertonLogo} alt="Holberton Logo" className="App-logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <div className="body-content">
          <p>Login to access the full dashboard</p>
        </div>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
