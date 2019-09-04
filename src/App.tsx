import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ProductResults from './pages/ProductResults/ProductResults';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import './App.scss';
import Header from './components/Header/Header';

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
