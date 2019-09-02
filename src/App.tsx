import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import Results from './ProductResults/ProductResults';
import './App.scss';

// Font Awesome library to set the icons that will be used
library.add(faSearch);

const App: React.FC = () => {
  return (
    <>
      <Router>
          <Header />
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/items" component={Results}></Route>
            <Redirect from='*' to='/' />
          </Switch>
      </Router>
    </>
  );
};

export default App;
