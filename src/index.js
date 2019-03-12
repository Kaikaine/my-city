import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import './Resources/css/app.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {firebase} from './firebase'


const App = (props) => {
    return (
        <Router>
            <Routes {...props}/>
        </Router>
    )
}

firebase
.auth()
.onAuthStateChanged((user) => {
    ReactDOM.render(<App user={user} />, document.getElementById('root'));
})


serviceWorker.unregister();
