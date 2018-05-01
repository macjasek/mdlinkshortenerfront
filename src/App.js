import Loadable from 'react-loadable';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import '../node_modules/material-icons/iconfont/material-icons.css';
import './App.css';
import './styles/styles.css';

const store = createStore(reducers);

const Loading = () => <div>Loading...</div>;

const LinksPage = Loadable ({
  loader: () => import('./containers/links'),
  loading: Loading
});

const EditFormPage = Loadable({
  loader: () => import('./containers/editForm'),
  loading: Loading
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LinksPage}/>
            <Route path="/edit/:id" component={EditFormPage}/>
            <Route path="/add" component={EditFormPage}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
