import React from 'react'
import {createStackNavigator} from "react-navigation";
import {
    createNavigationReducer,
    createReactNavigationReduxMiddleware,
    reduxifyNavigator
} from "react-navigation-redux-helpers";
import {connect} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
//SCREEN
import SplashScreen from '../Screen/Splash/screen-splash'
const AppNavigator = createStackNavigator({
    Splash: {screen: SplashScreen}
}, {
    headerMode: 'none',
    initialRouteName: 'Splash'
});

export const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
    nav: navReducer
});
export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const mapStateToProps = (state) => ({
    state: state.nav,
});
const App = reduxifyNavigator(AppNavigator,"root");
const AppWithNavigationState = connect(mapStateToProps)(App)
export const store = createStore(
    appReducer,
    applyMiddleware(thunk, middleware),
);
class Root extends React.Component{

    render(){
        return(
            <AppWithNavigationState/>
        )
    }
}

export default connect(mapStateToProps)(Root)