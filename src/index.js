import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home';
import Login from './views/login'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './helpers/store';
import DevTools from './helpers/DevTools';
ReactDOM.render(
    <Provider store={store} >
    <div>
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
        </div>
    </BrowserRouter>
    <DevTools/>
    </div>

    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
