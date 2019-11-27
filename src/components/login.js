import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class Login extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div className="justify-content-center">
                <Container>
                    <Row className="justify-content-md-center">
                        <Card style={{width: '40rem', height: '5rem', alignItems:'center', margin:'20px'}} 
                            border="success" bg="dark" className="text-center">
                                <h1>Login</h1>
                        </Card>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Card style={{width: '40rem', height: '20rem', margin:'10px'}} 
                            border="success" bg="dark" className="text-center">
                            <Card.Body>
                            <Form style={{margin:'20px'}}>
                                <Form.Group controlId="formBasicEmail" onSubmit={this.onSubmit}>
                                    <Form.Label value={email}><h5>Email address</h5></Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label value={password}><h5>Password</h5></Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    <h5>Sign In</h5>
                                </Button>
                                <Button type="submit" style={{margin: '0px 0px 0px 10px'}}>
                                    <h5>Register</h5>
                                </Button>
                            </Form>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
            <Switch>
                <Route path="/register" component={Register}/>
            </Switch>
            </BrowserRouter>
        );
    }
}

export default Login;