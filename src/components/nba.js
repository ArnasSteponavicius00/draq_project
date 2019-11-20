import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class NBA extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            games: [],
            teams: []
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

        axios.get('https://www.balldontlie.io/api/v1/teams')
        .then(response => {
            console.log(response);
            this.setState({teams: response.data.data});
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render(){
        const games = this.state.games.map((games, key)=>{
            return <div key={key}>
            <Card style={{width: '20rem', alignItems:'center', margin:'20px'}} 
                            border="success" bg="dark" className="text-center">
            <p>{games.home_team_score} - {games.visitor_team_score}</p>
            
            <p>{games.home_team.full_name} vs. {games.visitor_team.full_name}</p>
            </Card>
            </div>
        });

        const teams = this.state.teams.map((teams, key)=>{
            return <div key={key}>
            <Card style={{width: '20rem', alignItems:'center', margin:'20px'}} 
                            border="danger" bg="dark" className="text-center">
            <p>{teams.id} - {teams.abbreviation} - {teams.full_name} - {teams.division}</p>
            </Card>
            </div>
        });

        return(
            <div className="liveGames">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="live-games-header">Live Games</h2>
                            <Card style={{width: '30rem', alignItems:'center', margin:'20px'}} 
                            border="success" bg="dark" className="text-center">
                                <div>
                                    <ul>
                                        {games}
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <h2 className="league-teams-header">League Teams</h2>
                            <Card style={{width: '30rem', alignItems:'center', margin:'20px'}} 
                            border="danger" bg="dark" className="text-center">
                                <div>
                                    <ul>
                                        {teams}
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NBA;