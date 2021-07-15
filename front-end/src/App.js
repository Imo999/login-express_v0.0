import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/users/login' component={Login} />
      <Route exact path='/users/register' component={Register} />
      <Route exact path='/users/dashboard' component={Dashboard} />

    </Switch>
  );
}

export default App;

// <Redirect to='/' />