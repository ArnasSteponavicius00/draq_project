import React from'react';
import jwt_decode from 'jwt-decode';
import Table from 'react-bootstrap/Table';

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
                <h2>Profile Settings:</h2>
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
            </div>
        );
    }
}

export default Settings;