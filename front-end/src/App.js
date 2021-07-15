import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:4000/")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users/login' component={Login} />
        <Route exact path='/users/register' component={Register} />
        <Route exact path='/users/dashboard' component={Dashboard} />
      </Switch>
    );
  }
}

export default App;