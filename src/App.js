import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/pages/Main'
import Nav from './components/layout/Nav'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav />
            <Switch>
              <Route path="/" component={Main} exact/>
            </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
