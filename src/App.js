import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//pages
import Home from './pages/home';
import About from './pages/about';
import Exp from './pages/exp';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Mdc from './pages/mdc';
import Ss from './pages/ss';
import Nn from './pages/nn';
import Ma from './pages/ma';
import Web from './pages/web';
import './App.scss';



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" render={() => (
        <Home />
        )}/>
        <Route path="/about" render={() => (
          <About />
        )}/>
        <Route path="/exp" render={() => (
          <Exp/>
        )}/>
        <Route path="/portfolio" render={() => (
          <Portfolio />
        )}/>
        <Route path="/contact" render={() => (
          <Contact />
        )}/>
        <Route path="/mrsdhillonscurries" render={() => (
          <Mdc />
        )}/>
        <Route path="/sklshr" render={() => (
          <Ss />
        )}/>
        <Route path="/ncnews" render={() => (
          <Nn />
        )}/>
        <Route path="/meteorite" render={() => (
          <Ma />
        )}/>
        <Route path="/website" render={() => (
          <Web />
        )}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
