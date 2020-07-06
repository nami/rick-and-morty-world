import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';
import Locations from './components/locations'

function App() {
  return (
    <div className="App container is-fluid">
      <h1 className="title has-text-centered">Rick & Morty Worlds</h1>
      <Locations />
    </div>
  );
}

export default App;
