export const select = (car) => {
  
  return {
     //function actioncreater 
      type: "CAR_SELECTED",
      payload: car 
  }
};