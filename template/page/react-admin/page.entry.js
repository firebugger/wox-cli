import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { LocaleProvider } from 'antd';
import antd_en_US from 'antd/lib/locale-provider/en_US';
import rootSaga from './sagas';
import createStore from './store/createStore';
import App from './containers/app';
import Cookie from 'js-cookie';
import intl from 'react-intl-universal';
import zh_CN from 'app/locales/zh_CN';
import en_US from 'app/locales/en_US';

const currentLocale =  Cookie.get('lang') || 'zh_CN';     // cookie 字段根据业务需要修改
intl.init({ currentLocale, locales: { zh_CN, en_US } });

const sagaMiddleware = createSagaMiddleware();
const store = createStore(sagaMiddleware);
sagaMiddleware.run(rootSaga);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      {
        currentLocale === 'en_US' ?
        <LocaleProvider locale={antd_en_US}>
          <App />
        </LocaleProvider> :
        <App />
      }
    </Provider>,
    document.getElementById('app')
  );
}

render();
store.subscribe(render);
