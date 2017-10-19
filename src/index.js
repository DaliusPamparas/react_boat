import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux';
import allReducers from './reducers';
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from 'react-redux';

import App from "./components/App";


const store = createStore (allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
,
 document.getElementById("root")
);
registerServiceWorker();