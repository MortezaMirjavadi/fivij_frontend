import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'babel-polyfill';

import MainContent from "./components/MainContent/MainContent";


import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./store/sagas/saga";
import categoryMenuReducer from "./store/reducers/categoryMenuReducer";
import RegisterAdv from "./components/RegisterAdv/RegisterAdv";
import LoginCmp from "./components/Login/LoginCmp";
import loginReducer from "./store/reducers/loginReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    appData: rootReducer,
    categoryMenuData: categoryMenuReducer,
    loginData: loginReducer
});

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(rootSaga);

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Route path="/new" component={RegisterAdv}/>
            <Route path="/login" component={LoginCmp}/>
            <Route path="/" exact component={MainContent}/>
        </Router>
    </Provider>
    ,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept();
}
