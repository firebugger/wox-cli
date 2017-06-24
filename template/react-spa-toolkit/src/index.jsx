import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import rootSaga from './sagas';
import createStore from './store/createStore';
import Home from './pages/home';
import Users from './pages/users';
import './styles/index.less';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const store = createStore([sagaMiddleware, historyMiddleware]);
sagaMiddleware.run(rootSaga);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/users" component={Users}/>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
  );
}

render();
store.subscribe(render);
