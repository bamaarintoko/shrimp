import {combineReducers} from "redux";
import {navReducer} from '../Navigator/AppNavigator'

const appReducer = combineReducers({
    nav : navReducer
})

export default appReducer