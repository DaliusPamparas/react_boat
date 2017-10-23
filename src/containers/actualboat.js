import React, {Component} from 'react';


class Actualboat extends Component {
  render(){
     

      return (
          <div className="contentActual">
              Actual boat 
          </div>
      );
  }  
}
function mapStateToProps (state){
    return {
       car: state.active
    };  
  }

export default Actualboat;

