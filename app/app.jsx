var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Nav = require('Nav');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Timer} />
          <Route path="countdown" component={Countdown} />
        </Route>
    </Router>,
    document.getElementById('app')
);
