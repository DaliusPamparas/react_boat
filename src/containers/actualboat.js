import React, {Component} from 'react';
import {connect} from 'react-redux';

class Actualboat extends Component {
  render(){
     

      return (
          <div className="contentActual">
              <div>
              <h2>
                  {this.props.boat.name}
              </h2>
              </div>
              <div>
              Weight: {this.props.boat.weight} t.
              
              </div>
              <div>
              Weight: {this.props.boat.weight} t.
              
              </div>
          </div>
      );
  }  
}
function mapStateToProps (state){
    return {
       boat: state.activeboat
    };  
  }

  export default connect (mapStateToProps)(Actualboat);

