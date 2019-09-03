import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import ProductResults from './ProductResults/ProductResults';
import ProductDetail from './ProductDetail/ProductDetail';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/items" component={ProductResults}></Route>
          <Route exact path="/items/:id" component={ProductDetail}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
