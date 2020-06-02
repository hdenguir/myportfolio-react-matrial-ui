import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './components';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import 'typeface-roboto';
import './App.css';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cv" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default App;
