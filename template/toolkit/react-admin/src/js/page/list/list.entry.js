import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import createStore from './store/createStore';
import App from './containers/app';
import './styles/index.less';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(sagaMiddleware);
sagaMiddleware.run(rootSaga);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
}

render();
store.subscribe(render);
