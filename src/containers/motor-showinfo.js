import React, {Component} from 'react';
import{bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMotors} from '../actions/index';
import {showMotorInfo} from '../actions/index';
import { Container, Row, Col } from 'reactstrap';



class Motorshowinfo extends Component {
    render(){
        if (!this.props.motor){
            return ( <p> välj button details för att visa info </p>);
        }
  
        return (
            <div>
                <h2>
                    {this.props.motor.name}
                </h2>
                <br/>
                {this.props.motor.desc}
            </div>
        );
    }  
  }
function mapStateToProps (state){
  return {
     motor: state.motor_showinfo
  };  
}



export default connect(mapStateToProps)(Motorshowinfo);