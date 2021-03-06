import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './containers/AppContainer';
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root'));

