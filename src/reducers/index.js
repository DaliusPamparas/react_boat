import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';
import BoatsReducers from './boat';
import MotorsReducers from './motor';
import ActiveBoat from './boat-active';
import Motor_showinfo from './motor_showinfo';
import Motor_add from './motor_add';



const allReducers = combineReducers ({
  cars: CarsReducers,
  active: ActiveCar,
  boats: BoatsReducers,
  motors: MotorsReducers,
  activeboat: ActiveBoat,
  motor_showinfo: Motor_showinfo,
  motor_add: Motor_add   
});


export default allReducers;