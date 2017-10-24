import React, {Component} from 'react';
import {connect} from 'react-redux';


class Motorshowinfo extends Component {
    render(){
        if (!this.props.motor){
            return ( <p> välj button details för att visa info </p>);
        }
  
        return (
            <div className="motordetails">
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