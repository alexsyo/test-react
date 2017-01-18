import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Routes
import App from './App.js';
import Home from './Components/Routes/Home.js';
import Stuff from './Components/Routes/Stuff.js';
import Friends from './Components/Routes/Friends.js';
import About from './Components/Routes/About.js';
import Error from './Components/Routes/Error';

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/friends" component={Friends} />
            <Route path="/about" component={About} />
            <Route path="*" component={Error} />
        </Route>
    </Router>,
    document.getElementById('app')
);
