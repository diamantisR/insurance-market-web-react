import React, { Component } from 'react';
import './App.css';
import MonstersList from './MonstersList';
import Monster from './Monster';
import Home from './Home';
import { PageNotFound } from './PageNotFound';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { ImageJumbotron } from './components/ImageJumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <ImageJumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={() => (<Redirect to='/home' />)} />
              <Route path="/monster" component={Monster} />
              <Route path="/monsters" component={MonstersList} />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;