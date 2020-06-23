import React from 'react';
import CardContainer from './components/Card/CardContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/cards/all">
            <CardContainer />
          </Route>
          <Route path="/cards/:id">
            <CardContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
