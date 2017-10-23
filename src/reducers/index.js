import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';
import BoatsReducers from './boat';
import MotorsReducers from './motor';



const allReducers = combineReducers ({
  cars: CarsReducers,
  active: ActiveCar,
  boats: BoatsReducers,
  motors: MotorsReducers  
});


export default allReducers;