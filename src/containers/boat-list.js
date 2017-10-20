import React, {Component} from 'react';
import{bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectBoats} from '../actions/index';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class BoatsList extends Component {

    showBoatsList () {
        return this.props.boats.map ((boat) => {
            return (
               
                   
                <Col xs="3" > 
                    <Card >
                        <CardImg top  src={boat.img} alt={"our boat "+boat.name} />
                        <CardBody>
                            <CardTitle>{boat.name}</CardTitle>
                            <CardSubtitle>{boat.price} kr.</CardSubtitle>
                            <CardText>{boat.desc}</CardText>
                            <Button >Bygg boat</Button>
                        </CardBody>
                    </Card>
                                      
               </Col>
                
                       
       
               
            );

        });
    }
    
    render (){
        return (
           
            <Container> 
                <Row>
                 {this.showBoatsList ()}
               </Row>
            </Container>
                   
                    
        );
    }
}

function mapStateToProps (state){
  return {
     boats: state.boats
  };  
}

function matchDispatchToProps (dispatch){
    return bindActionCreators({selectBoats: selectBoats}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(BoatsList);