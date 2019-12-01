import React from'react';
import jwt_decode from 'jwt-decode';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

class Settings extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken;
        if(!token){
            window.location = '/login';
            console.log('Invalid login');
        }else{
            const decoded = jwt_decode(token);
            this.setState({
                username: decoded.username,
                email: decoded.email,
                password: decoded.password
            });
        }
    }

    render(){
        return(
            <div className="settings-comp">
                <Container style={{margin: '0rem 0rem 0rem 20rem'}}>
                    <h3>Profile:</h3>
                    <Table striped bordered hover variant="dark" style={{width: '15rem', alignItems:'center'}}>
                        <tbody>
                            <tr>
                                <td>Username:</td>
                                <td>{this.state.username}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Password:</td>
                                <td>{this.state.password}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default Settings;