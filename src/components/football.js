import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import '../App.css';

class Football extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            events: [],
            teams: []
        };
    }

    componentDidMount(){
        axios.get('https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328')
        .then(response => {
            console.log(response);
            this.setState({events: response.data.events});
        })
        .catch(function(error) {
            console.log(error);
        })

        axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(response => {
            console.log(response);
            this.setState({teams: response.data.teams});
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render(){
        const events = this.state.events.map((events, key)=>{
            return <div key={key}>
                <Table striped bordered hover variant="dark"
                style={{width: '40rem', alignItems:'center', margin:'20px'}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Home</th>
                            <th>Away</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{events.idEvent}</th>
                            <td>{events.strHomeTeam}</td>
                            <td>{events.strAwayTeam}</td>
                            <td>{events.strDate}</td>
                        </tr>
                        </tbody>
                </Table>
            </div>
        });

        const teams = this.state.teams.map((teams, key)=>{
            return <div key={key}>
            <Card style={{width: '20rem', alignItems:'center', margin: '10px 40px 10px 10px'}} 
                            border="success" bg="dark" className="text-center">
            <p> - </p>
            <p>{teams.strTeam}</p>
            <p>Founded: {teams.intFormedYear}</p>
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
                                {events}
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

export default Football;