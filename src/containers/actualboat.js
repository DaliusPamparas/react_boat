import React, {Component} from 'react';
import {connect} from 'react-redux';

class Actualboat extends Component {
  render(){
     

      return (
          <div className="contentActual">
              <div>
                  {this.props.boat.name}
              </div>
              <div>
                 Längd: {this.props.boat.Längd} m.
              </div>
              <div>
                 Weight: {this.props.boat.weight} t.
              </div>
              <div>
                 Motor: {this.props.boat.motor} 
              </div>
              <div>
                 HP: {this.props.boat.hp} 
              </div>
              <div>
                 Pris: {this.props.boat.price} kr.
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

