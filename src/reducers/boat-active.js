export default function (state=null, action){
    switch (action.type){
        case "Boat_SELECTED":
        return action.payload;
        break;
        default:
         return state;
    }
}