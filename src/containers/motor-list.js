import React, {Component} from 'react';
import{bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMotors} from '../actions/index';
import { Container, Row, Col } from 'reactstrap';



class MotorsList extends Component {

    showMotorsList () {
        return this.props.motors.map ((motor) => {
            return (
               
                   
                <Col xs="3" > 
                        <img src={motor.img} width="150px"  alt={"our motor "+motor.name}/>
                       
                      
                          Details
                      
                    
                                      
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
    return bindActionCreators({selectMotors: selectMotors}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MotorsList);