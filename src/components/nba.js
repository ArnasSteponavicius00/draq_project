import React from 'react';
import axios from 'axios';

class NBA extends React.Component{

    state = {
        games: []
    }

    componentDidMount(){
        axios.get('https://www.balldontlie.io/api/v1/games')
        .then(res => {
            this.setState({games: []});
        })
    }

    render(){
        return(
            <div>
                <h1>NBA</h1>
                <ul>
                {this.state.games.map(games => <li>{games}</li>)}
                </ul>
            </div>
        );
    }
}

export default NBA;