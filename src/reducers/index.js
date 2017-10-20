import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';
import BoatsReducers from './boat'

const allReducers = combineReducers ({
  cars: CarsReducers,
  active: ActiveCar,
  boats: BoatsReducers 
});

export default allReducers;