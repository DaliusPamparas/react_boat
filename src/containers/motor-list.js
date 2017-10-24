import React, {Component} from 'react';
import{bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMotors} from '../actions/index';
import {showMotorInfo} from '../actions/index';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardLink, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class MotorsList extends Component {

    showMotorsList () {
       

        return this.props.motors.map ((motor) => {
            return (
               
                   
                <Col xs="4" > 

                     <Card >
                        <CardImg className="motorimg" top  src={motor.img}  alt={motor.name} />
                        <CardBody>
                            <CardTitle>{motor.name}</CardTitle>
                            <CardSubtitle>{motor.priceplus} kr.</CardSubtitle>
                           
                            <Button className="btn">
                               Add
                            </Button>
                            <CardLink   onClick={() => this.props.showMotorInfo (motor)} key={motor.id} >Details</CardLink>
                            
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
                 {this.showMotorsList ()}
               </Row>
            </Container>
                   
                    
        );
    }
}

function mapStateToProps (state){
  return {
     motors: state.motors
  };  
}

function matchDispatchToProps (dispatch){
    return bindActionCreators({selectMotors: selectMotors,
                               showMotorInfo: showMotorInfo
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MotorsList);