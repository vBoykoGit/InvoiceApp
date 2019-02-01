import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { App } from './components/containers/App';
import { Provider } from "react-redux";
import storeFactory from './store/store.js'
import 'react-select/dist/react-select.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = storeFactory()

render(
    <Provider className="App" store={store}>
        <App />
    </Provider>,
    document.getElementById('app-root'));
