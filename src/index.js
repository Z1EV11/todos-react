import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import * as store from './store/Store.js'

configure({ enforceActions: 'strict' });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
