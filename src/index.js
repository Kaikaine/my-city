import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import './Resources/css/app.css'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Routes />
        </Router>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
