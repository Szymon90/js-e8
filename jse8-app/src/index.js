import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Header from './components/Header/Header';
import Shell from './components/Shell';
import Data from './components/Data';
// import TodoList from './components/TodoList'
import Sections from './components/Sections'
import Section from './components/Section'
import Photo from './components/Photo'
import Login from './components/Login'

const composeEnhancers = composeWithDevTools({});

ReactDOM.render(
    <Provider store={
        createStore(
            rootReducer,
            composeEnhancers(
                applyMiddleware(thunk)
            )
        )
    }>
        <Router>
            <Header title="CM-JS-E-8" />
            <Shell />

            <Route path="/" exact component={() => null} />
            <Route path="/data/" component={Data} />{/*
            <Route path="/todoList/" component={TodoList} /> */}
            <Route path="/sections/" component={Sections} />
            <Route path="/section/:id" component={Section} />
            <Route path="/photo/:id" component={Photo} />
            <Route path="/login" component={Login} />
            {/* <Route component={() => `PAGE NOT FOUND`} /> */}
        </Router>
    </Provider>,
    document.body
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
