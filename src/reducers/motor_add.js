export default function (state=null, action){
    switch (action.type){
        case "Motor_add":
        return action.payload;
        break;
        default:
         return state;
    }
}