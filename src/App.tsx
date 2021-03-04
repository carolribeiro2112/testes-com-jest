import React from 'react';
import './App.css';
import Alert from './components/Alert';
import Avatar from './components/Avatar';
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <Avatar/>
      <Lista/>
      <Alert/>
    </div>
  );
}

export default App;
