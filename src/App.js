import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Home from './components/home';
import Login from './components/login';
import Esports from './components/eSports';
import NBA from './components/nba';
import Football from './components/football';
import Cricket from './components/cricket';
import Settings from './components/settings';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <NavBar className="navBar">
          <NavBar.Brand><h2 className="webName">LiveFeed</h2></NavBar.Brand>
          <Container>
            <Nav className="justify-content-end">
               <Nav.Link href="/home"><h5 className="navPages">Home</h5></Nav.Link>
               <Nav.Link href="/esports"><h5 className="navPages">eSports</h5></Nav.Link>
               <Nav.Link href="/nba"><h5 className="navPages">NBA</h5></Nav.Link>
               <Nav.Link href="/football"><h5 className="navPages">Football</h5></Nav.Link>
               <Nav.Link href="/cricket"><h5 className="navPages">Cricket</h5></Nav.Link>
            </Nav>  
            <Nav>
              <Nav.Link href="/settings"><Button style={{background:'#4717F6'}}><h5>Settings</h5></Button></Nav.Link>
            </Nav>
          </Container>
        </NavBar>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/esports" component={Esports}/>
          <Route path="/football" component={Football}/>
          <Route path="/nba" component={NBA}/>
          <Route path="/cricket" component={Cricket}/>
          <Route path="/settings" component={Settings}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
