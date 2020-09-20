import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Admin from './components/pages/Admin';


import Navbar from './components/navbar/navbar';
import Home from './components/pages/Home';
import ManuscriptPage from './components/pages/ManuscriptPage';
import MessagePage from './components/pages/MessagePage';
import AuthorPage from './components/pages/AuthorPage';
import SettingsPage from './components/pages/SettingsPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route exact path="/" component={Home}/>
          <Route path="/manuscripts" component={ManuscriptPage}/>
          <Route path="/messages" component={MessagePage}/>
          <Route path="/profile" component={AuthorPage}/>
          <Route path="/settings" component={SettingsPage}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;

