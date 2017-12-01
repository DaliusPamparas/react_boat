export const select = (car) => {
  
  return {
     //function actioncreater 
      type: "CAR_SELECTED",
      payload: car 
  }
};

export const selectBoats = (boat) => {
  
  return {
     //function actioncreater 
      type: "Boat_SELECTED",
      payload: boat 
  }
};

export const showMotorInfo = (motor) => {
  
  return {
     //function actioncreater 
      type: "Motor_showinfo",
      payload: motor 
  }
};
export const addMotorToActualBoat = (motor) => {
  
  return {
     //function actioncreater 
      type: "Motor_add",
      payload: motor 
  }
};

