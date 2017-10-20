import React, {Component} from 'react';


class Actualboat extends Component {
  render(){
     

      return (
          <div>
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