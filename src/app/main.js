import React from 'react'
import Router from 'react-router'
import {RouteHandler, Route} from 'react-router'

import App from './components/app'

const routes = (
  <Route name="app" path="/" handler={App}></Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
