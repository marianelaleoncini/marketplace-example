import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProductResults from './pages/ProductResults/ProductResults';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <ToastContainer />
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
