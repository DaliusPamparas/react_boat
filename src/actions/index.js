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