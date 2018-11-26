import React from 'react'
import {createStackNavigator, NavigationActions} from "react-navigation";
import {
    createNavigationReducer,
    createReactNavigationReduxMiddleware,
    reduxifyNavigator
} from "react-navigation-redux-helpers";
import {connect} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {BackHandler} from 'react-native'
//SCREEN
import SplashScreen from '../Screen/Splash/screen-splash'
import HomeScreen from '../Screen/Home/screen-home'
import DetailScreen from '../Screen/Home/screen-detail'
import {redShrimp, redDetailShrimp} from "../Reducers/shrimpReducers";
import {redRegions} from "../Reducers/regionReducers";

const AppNavigator = createStackNavigator({
    Splash: {screen: SplashScreen},
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen}
}, {
    headerMode: 'none',
    initialRouteName: 'Home'
});

export const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
    nav: navReducer,
    redShrimp: redShrimp,
    redRegions: redRegions,
    redDetailShrimp: redDetailShrimp
});
export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const mapStateToProps = (state) => ({
    state: state.nav,
});
const App = reduxifyNavigator(AppNavigator, "root");
const AppWithNavigationState = connect(mapStateToProps)(App)
export const store = createStore(
    appReducer,
    applyMiddleware(thunk, middleware),
);

class Root extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            const {state} = this.props;
            console.log(this.props)
            if (state.index === 0) {

                BackHandler.exitApp()
                return false;
            }
            this.props.dispatch(NavigationActions.back());
            return true;
        }.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    render() {
        return (
            <AppWithNavigationState/>
        )
    }
}

export default connect(mapStateToProps)(Root)