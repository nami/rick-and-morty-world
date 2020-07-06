import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';
import Locations from './components/locations'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './components/Profile'

function App() {
  return (
    <div className="App container is-fluid">
      <Router>
        <div>
          <Route exact path="/" component={ Locations } />
          <Route exact path="/profile/:id" component={ Profile } />
        </div>
      </Router>
    </div>
  );
}

export default App;
