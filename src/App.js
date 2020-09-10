import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Products from './components/Products';
import Admin from './components/Admin';
import Login, {fakeAuth} from './components/Login'

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Route exact path='/' component={Home}/>
      <Route path='/category'  component={Category}/>
      <Route path='/products' component={Products}/>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/admin" component={Admin} />
      
    </div>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
export default App;
