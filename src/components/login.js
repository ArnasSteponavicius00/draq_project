import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const login = user => {
    return axios.post('http://localhost:4000/users/login', {
        username: user.username,
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken' , res.data);
        return res.data;
    })
    .catch(error => {
        console.log(error);
    });
}


class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password:''
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const User = {
            email: this.state.email,
            password: this.state.password
        }

        login(User).then(res => {
            if(res) {
                this.props.history.push('/home')
            }
        })
    }

    render(){
        return(
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
                                <Form style={{margin:'20px', color:'black'}} onSubmit={this.onSubmit}>
                                    <Form.Group controlId="formBasicEmail" onSubmit={this.onSubmit}>
                                        <Form.Label ><h5>Email address</h5></Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" 
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label ><h5>Password</h5></Form.Label>
                                        <Form.Control type="password" placeholder="Password" 
                                        value={this.state.password}
                                        onChange={this.onChangePassword}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" style={{margin: '3px'}}>
                                        <h5>Login</h5>
                                    </Button>              
                                </Form>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;