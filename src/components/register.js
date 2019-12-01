import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

//
// post the payload of newUser details to the server
// check to see if details are valid, if null alert to invalid input
// else redirect to login page if input is valid
//
const register = newUser => {
    return axios.post('http://localhost:4000/users/register', {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
    })
    .then(response => {
        if(!newUser.username || !newUser.email || !newUser.password){
            alert('Invalid or Empty input(s)');
            console.log('Invalid Parameters');
        }else{
            console.log('New user registered!');
            window.location = '/login';
        }
    });
}

class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            email: '',
            password:''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
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

    //When button is clicked
    //set the current state of entered details to newUser
    //pass newUser into register as an object
    //post details to database
    onSubmit(e){
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        //call register and pass in the newUser object above
        register(newUser)
            .then(response => {
                if(response) {
                    console.log('User Registered');
            }
        });
    }

    render(){
        return(
            <div className="justify-content-center">
                <Container>
                    <Row className="justify-content-md-center">
                        <Card style={{width: '40rem', height: '5rem', alignItems:'center', margin:'20px'}} 
                            border="success" bg="dark" className="text-center">
                                <h1>Register a new account!</h1>
                        </Card>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Card style={{width: '40rem', height: '25rem', margin:'10px'}} 
                            border="success" bg="dark">
                            <Card.Body>
                                <Form style={{margin:'20px'}} onSubmit={this.onSubmit}>
                                    <Form.Group controlId="formBasicText" onSubmit={this.onSubmit}>
                                        <Form.Label ><h5>Username:</h5></Form.Label>
                                        <Form.Control type="text" placeholder="Enter your username..." 
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" onSubmit={this.onSubmit}>
                                        <Form.Label ><h5>Email:</h5></Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email..." 
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label ><h5>Password:</h5></Form.Label>
                                        <Form.Control type="password" placeholder="Enter password..." 
                                        value={this.state.password}
                                        onChange={this.onChangePassword}/>
                                    </Form.Group>
                                    <Button variant="danger" type="submit" style={{margin: '3px', background:'#0E0B16'}}>
                                        <h5>Register!</h5>
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

export default Register;