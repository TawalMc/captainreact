import React from 'react';
import { Router, Route,  Link  } from 'react-router-dom';
import { createBrowserHistory } from "history";

import './App.css';

import SimpleSearch from "./pages/SimpleSearch";
/* import CustomSearch from "./pages/CustomSearch";
 */
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path="/" component={SimpleSearch} />
      {/* <Route path="/customsearch" component={CustomSearch} /> */}
    </Router>
  );
}

export default App;
