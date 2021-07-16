import React from 'react';

import { pathHome, pathSearch } from './config.js'

import { Route, Switch, Redirect } from 'react-router-dom';

import FirstPage from './pages/FirstPage';
import TwittPage from './pages/TwittPage';

class App extends React.Component {
    render() {
        return (
          <Switch>
            <Route history={history} exact path={pathHome} component={FirstPage} />
            <Route history={history} exact path={pathSearch} component={TwittPage} />
            <Redirect from="/" to={pathHome} />
          </Switch>
        );
    }
}

export default App;
