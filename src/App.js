import React from 'react';
import {Switch, Route, BrowserRouter,Link} from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Home from './components/home';
import Login from './components/login';
import NBA from './components/nba';
import Football from './components/football';
import Cricket from './components/cricket';
import Register from './components/register';
import Settings from './components/settings';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  //remove usertoken from localStorage and push user to login page.
  logOut(e){
    e.preventDefault();
    localStorage.removeItem('usertoken')
    window.location = '/login'
  }

  render(){
    //NavBar for when there is no token in localStorage
    //displays login and register buttons
    const loginRegUser = (
      <BrowserRouter>
        <NavBar className="navBar">
          <NavBar.Brand><h2 className="webName">LiveFeed</h2></NavBar.Brand>
          <Container>
            <Nav className="justify-content-end">
               <Nav.Link href="/home"><h5 className="navPages">Home</h5></Nav.Link>
               <Nav.Link href="/nba"><h5 className="navPages">NBA</h5></Nav.Link>
               <Nav.Link href="/football"><h5 className="navPages">Football</h5></Nav.Link>
               <Nav.Link href="/cricket"><h5 className="navPages">Cricket</h5></Nav.Link>
            </Nav>  
            <Nav style={{margin:'10px'}}>
              <Link to="/login"><Button style={{background:'#4717F6', margin:'0px 0px 0px 10px'}}><h5>Log In</h5></Button></Link>
              <Link to="/register"><Button style={{background:'#4717F6', margin:'0px 0px 0px 10px'}}><h5>Register</h5></Button></Link>
            </Nav>
          </Container>
        </NavBar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/football" component={Football}/>
          <Route path="/nba" component={NBA}/>
          <Route path="/cricket" component={Cricket}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
    );

    //NavBar for when there is a token in localStorage
    //displays settings and logout buttons
    const loggedInUser = (
      <BrowserRouter>
        <NavBar className="navBar">
          <NavBar.Brand><h2 className="webName">LiveFeed</h2></NavBar.Brand>
          <Container>
            <Nav className="justify-content-end">
               <Nav.Link href="/"><h5 className="navPages">Home</h5></Nav.Link>
               <Nav.Link href="/nba"><h5 className="navPages">NBA</h5></Nav.Link>
               <Nav.Link href="/football"><h5 className="navPages">Football</h5></Nav.Link>
               <Nav.Link href="/cricket"><h5 className="navPages">Cricket</h5></Nav.Link>
            </Nav>  
            <Nav style={{margin: '10px'}}>
              <Link to="/settings"><Button style={{background:'#4717F6'}}><h5>Settings</h5></Button></Link>
              <a href="/#" onClick={this.logOut.bind(this)}><Button style={{background:'#4717F6', margin:'0px 0px 0px 10px'}}><h5>Logout</h5></Button></a>
            </Nav>
          </Container>
        </NavBar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/football" component={Football}/>
          <Route path="/nba" component={NBA}/>
          <Route path="/cricket" component={Cricket}/>
          <Route path="/settings" component={Settings}/>
        </Switch>
      </BrowserRouter>
    );
     
    //If a token exists, use the loggedInUser group
    //else use the loginRegUser group   
    return(
      <div>
        {localStorage.usertoken ? loggedInUser : loginRegUser}
      </div>
    );
  }
}

export default App;
