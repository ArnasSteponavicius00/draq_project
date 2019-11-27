import React from'react';
import axios from 'axios';

class Register extends React.Component { 

    render(){
        return(
            <div className="App">
                <h2>Register.</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email:  </label>
                        <input type="text"className="form-control"
                        value={this.state.Email}
                        onChange={this.onChangeEmail}/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text"className="form-control"
                        value={this.state.Password}
                        onChange={this.onChangePassword}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Movie" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;