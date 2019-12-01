import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class Home extends React.Component{

    render(){
        return(
            <div className="welcome-comp">
                <Container style={{margin: '10px 40px 10px 45rem'}}>
                    <Card style={{width: '30rem', alignItems:'center', margin: '40px 40px 10px 10px'}} 
                            border="success" bg="dark" className="text-center">
                        <div>
                            <h1>Welcome!</h1>
                            <p>Hello, welcome to LiveFeed!</p>
                            <p>
                                This is a website created as a project for college.
                                It is made using the MERN stack.
                            </p>
                            <p>
                                (MongoDB, Express, React and Nodejs)
                            </p>
                            <p>
                                If you noticed there is currently only a home tab to navigate to,
                                but once you register and login, two more tabs will appear beside it.
                                These two tabs will show data from 2 different api's that were got!
                            </p>
                            <p>
                                Enjoy looking through the site!
                            </p>
                        </div>
                    </Card>
                </Container>
        </div>
        );
    }
}

export default Home;