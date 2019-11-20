import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';


class NBA extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            games: []
        };
    }

    componentDidMount(){
        axios.get('https://www.balldontlie.io/api/v1/games')
        .then(response => {
            console.log(response);
            this.setState({games: response.data.data});
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render(){
        const games = this.state.games.map((games, key)=>{
            return <div key={key}>
            <p>{games.home_team.full_name} vs. {games.visitor_team.full_name}</p>
            </div>
        });

        return(
            <Card style={{width: '40rem', alignItems:'center', margin:'20px'}} 
            border="success" bg="dark" className="text-center">
                <div>
                    <ul>
                        {games}
                    </ul>
                </div>
            </Card>
        );
    }
}

export default NBA;