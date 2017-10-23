import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';
import BoatsReducers from './boat';
import MotorsReducers from './motor';
import ActiveBoat from './boat-active';



const allReducers = combineReducers ({
  cars: CarsReducers,
  active: ActiveCar,
  boats: BoatsReducers,
  motors: MotorsReducers,
  activeboat: ActiveBoat
});


export default allReducers;