import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Header from './components/Header';
import Shell from './components/Shell';

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
        <Header title="CM-JS-E-8" />
        <Shell />
    </Provider>,
    document.body
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
