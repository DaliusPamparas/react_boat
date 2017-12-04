export default function (state= 'activeboat' , action){
    switch (action.type){
        case "Motor_add":
          return { ...state, activeboat: action.motor }
        break;
        default:
         return state;
    }
}