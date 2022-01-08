import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ProfileProvider } from './context/ProfileContext';
import { UserProvider } from './context/UserContext';
import EditProfile from './views/EditProfile/EditProfile';
import Home from './views/Home/Home';
import LogIn from './views/LogIn.jsx/LogIn';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';

export default function App() {
  return (
    <UserProvider>
      {/* <ProfileProvider> */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/editprofile">
            <EditProfile />
          </PrivateRoute>
          <PrivateRoute path="/createprofile">
            <EditProfile isEdit={false}/>
          </PrivateRoute>
        </Switch>
      </Router>
      {/* </ProfileProvider> */}
    </UserProvider>
  );
}
