import { combineReducers } from "redux";
import setLangReducer from "./common/reducer";
import laoderReducer from "./common/laoderReducer";

const RootReducer = combineReducers({
    setLangReducerResult: setLangReducer,
    laoderReducerResult: laoderReducer
})

export default RootReducer