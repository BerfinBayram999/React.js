import { combineReducers} from "redux";
import counterReducers from "./counterReducers";


const reducers = combineReducers({
    counterReducers
});

export default reducers;


//Tüm Reducerları kombine ettiğimiz kısım ve export ediyoruz