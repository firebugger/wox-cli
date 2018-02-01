import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import createStore from './store/createStore';
import App from './containers/app';
import Cookie from 'js-cookie';
import intl from 'react-intl-universal';
import zh_CN from 'app/locales/zh_CN';
import en_US from 'app/locales/en_US';

const currentLocale =  Cookie.get('locale-language') || 'en_US';
intl.init({ currentLocale, locales: { zh_CN, en_US } });

// title
document.title = intl.get('pages.index.documentTitle');

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
