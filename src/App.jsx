import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import EditProfile from './views/EditProfile/EditProfile';
import Home from './views/Home/Home';
import LogIn from './views/LogIn.jsx/LogIn';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';

export default function App() {
  return (
<Router>
  <Header />
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path='/login'>
      <LogIn />
    </Route>
    <Route path='/register'>
      <Register />
    </Route>
    <Route path='/profile'>
      <Profile />
    </Route>
    <Route path='/editprofile'>
      <EditProfile />
    </Route>
  </Switch>
</Router>
  );
}
