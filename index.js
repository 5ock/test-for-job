import React from 'react';
import ReactDOM from 'react-dom';
// import App from './src/app'

import { createBrowserHistory } from 'history'
import { Router, HashRouter } from 'react-router-dom'
import { routes } from './src/routes'

const browserHistory = createBrowserHistory()

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>{routes()}</HashRouter>
    </React.StrictMode>, document.getElementById('app')
);