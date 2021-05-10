import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//pages
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/exp';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import MDCurries from './pages/mdc';
import SklShr from './pages/ss';
import NNews from './pages/nn';
import Meteorite from './pages/ma';
import Website from './pages/web';
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
          <Experience/>
        )}/>
        <Route path="/portfolio" render={() => (
          <Portfolio />
        )}/>
        <Route path="/contact" render={() => (
          <Contact />
        )}/>
        <Route path="/mrsdhillonscurries" render={() => (
          <MDCurries />
        )}/>
        <Route path="/sklshr" render={() => (
          <SklShr />
        )}/>
        <Route path="/ncnews" render={() => (
          <NNews />
        )}/>
        <Route path="/meteorite" render={() => (
          <Meteorite />
        )}/>
        <Route path="/website" render={() => (
          <Website />
        )}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
