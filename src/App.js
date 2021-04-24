// Importing packages
import React from "react";
import {BrowserRouter as Router,Switch, Route,} from "react-router-dom";
import Map from './Components/Map/map'
import './App.css';

function App() {
  return (
 
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Map />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
