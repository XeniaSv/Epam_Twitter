import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import FirstPage from './pages/FirstPage';
import TwittPage from './pages/TwittPage';

class App extends React.Component {
    render() {
        return (
          <Switch>
            <Route history={history} path="/home" component={FirstPage} />
            <Route history={history} path="/search" component={TwittPage} />
            <Redirect from="/" to="home" />
          </Switch>
        );
    }
}

export default App;
