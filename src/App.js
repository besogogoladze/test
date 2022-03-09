import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import ProductPages from './components/ProductPages';
function App() {


  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ProductPages" component={ProductPages} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
