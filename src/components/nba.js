import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


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
            <Table striped bordered hover variant="dark"
                style={{width: '40rem', alignItems:'center', margin:'20px'}}>
                    <thead>
                        <tr>
                            <th>Home</th>
                            <th>Score H</th>
                            <th>Score A</th>
                            <th>Away</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{games.home_team.full_name}</th>
                            <td>{games.home_team_score}</td>
                            <td>{games.visitor_team_score}</td>
                            <td>{games.visitor_team.full_name}</td>
                        </tr>
                        </tbody>
                </Table>
            </div>
        });

        const teams = this.state.teams.map((teams, key)=>{
            return <div key={key}>
            <Card style={{width: '20rem', alignItems:'center', margin: '0px 40px 10px 10px'}} 
                            border="success" bg="dark" className="text-center">
            <p> - </p>
            <p>{teams.abbreviation} - {teams.full_name}</p>
            <p>Division: {teams.division}</p>
            </Card>
            </div>
        });

        return(
            <div>
            <Container>
                <Row>
                    <Col>
                        <div className="events">
                            <Card style={{width: '19.5rem', alignItems:'center', margin: '10px 40px 10px 175px'}} 
                                border="success" bg="dark" className="text-center">
                                <h2>Upcoming Games</h2>
                            </Card>
                            {games}
                        </div>
                    
                    </Col>
                    <Col>
                        <div className="teams">
                        <Card style={{width: '18rem', alignItems:'center', margin: '10px 40px 10px 25px'}} 
                                border="success" bg="dark" className="text-center">
                                <h2>League Teams</h2>
                            </Card>
                            {teams}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default NBA;