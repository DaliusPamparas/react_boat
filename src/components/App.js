import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

import Hem from './Hem';
import Motors from './Motors';
import Tillbehor from './Tillbehor';
import Farjer from './Farjer';
import CarsList from '../containers/cars-list';
import Details from '../containers/details';
import '../styles/app.css';
class App extends React.Component {
  render() {
    return (
      <div>
         <div>
         <Container fluid>
            <Row>
                <Col  xs="12" className="header">
                    <h1>bygg din boat</h1>
                    
                </Col>
                
            </Row>
        </Container>
        <Container >
            <Row className="menu">
                <Col  xs="3">
                <Link to='/'>Hem</Link>
                </Col>
                <Col  xs="3">
                <Link to='/motors'>Motors</Link>
                </Col>
                <Col  xs="3">
                <Link to='/tillbehor'>Tillbehör</Link>
                </Col>
                <Col  xs="3">
                <Link to='/farjer'>Färjer</Link>
                </Col>
                
            </Row>
        </Container>
        <Container >
            <Row>
                <Col  xs="12">
                <Switch>
                  <Route exact path='/' component={Hem}/>
                  <Route path='/motors' component={Motors}/>
                  <Route path='/tillbehor' component={Tillbehor}/>
                  <Route path='/farjer' component={Farjer}/>
                </Switch>
                </Col>
                
            </Row>
        </Container>
          </div>
       {/*  <div>
          Cars info 
            <CarsList/>

          Details
           <Details/>
        </div> */}
        
      </div>
    );
  }
}


export default App;