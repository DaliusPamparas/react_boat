import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  render(){
      if (!this.props.car){
          return ( <p> chooose your bill </p>);
      }

      return (
          <div>
              <h2>
                  {this.props.car.name}
              </h2>
              <img src={this.props.car.img} width="300px" height="300px" alt="omg"/><br/>
              <p> {this.props.car.desc} </p>
              <br/> {this.props.car.speed}
          </div>
      );
  }  
}
function mapStateToProps (state){
    return {
       car: state.active
    };  
  }

export default connect (mapStateToProps)(Details);