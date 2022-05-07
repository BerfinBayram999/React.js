import * as actionTypes from "../actions/actionTypes"


//REDUCER'IN GÖREVİ ACTION'U BARINDIRIP BARINDIRMADIĞINA BAKMAKTIR!


const counterReducers = (state=0,action)=> {
    let newState;
 switch (action.type) {
    case actionTypes.INCREASE_Counter:
         return newState = state + action.payload;
    case actionTypes.DECREASE_Counter:
         return newState= state - action.payload;
    case actionTypes.INCREASEBYTWO_Counter:
         return newState= state + action.payload;
    case actionTypes.DECREASEBYTWO_Counter:
         return newState= state - action.payload;
         
 
     default:
        return state;
       
 }

}

export default counterReducers;