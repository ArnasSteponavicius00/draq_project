import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './components/home';
import Login from './components/login';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div id="nav">
          <NavBar className="navBar" bg="dark" variant="dark">
            <NavBar.Brand><h2 className="webName">LiveFeed</h2></NavBar.Brand>
            <Nav>
              <Nav.Link href="/home"><h5 className="navPages">Home</h5></Nav.Link>
            </Nav>
          </NavBar>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
