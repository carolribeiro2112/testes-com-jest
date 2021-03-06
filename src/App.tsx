import React from 'react';
import './App.css';
import Alert from './components/Alert';
import Avatar from './components/Avatar';
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <Avatar url='https://avatars.githubusercontent.com/u/65139655?s=460&u=5a63f14404df23ed8c72464c08ad22a45f7aa9f4&v=4'/>
      <Lista profession='Dev Front-end'/>
      <Alert alert='Você deve aceitar os termos'/>
    </div>
  );
}

export default App;
