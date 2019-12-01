import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

//
//method that accepts a user object and posts to server
//if the response has an error as the data object, show error
//else if the response is populated with matching user details 
//create a token for the session
//
const login = user => {
    return axios.post('http://localhost:4000/users/login', {
        username: user.username,
        email: user.email,
        password: user.password
    })
    .then(response => {
        //DEBUG
        //console.log(response);
        if(response.data.error){
            alert('Invalid email or password');
        }else if(response.data){
            localStorage.setItem('usertoken' , response.data);
            return response.data;
        }
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

    //handle input of the email box
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    //handle input of the password box
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    //when button is pressed, set the state of user details
    //pass them into login and redirect to the homepage or display an error
    onSubmit(e){
        e.preventDefault();

        //object to pass into login method
        const User = {
            email: this.state.email,
            password: this.state.password
        }
        //pass in user object to login and if the response
        //passes validation in method, push user to home page
        login(User).then(response => {
            if(response) {
                window.location = '/';
            }
        })
        .catch(error => console.log(error));
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