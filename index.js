import React from 'react';
import ReactDOM from 'react-dom';
import Rootreducers from './reducers';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import rootSagas from './sagas';

// const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  Rootreducers)

// sagaMiddleware.run(rootSagas)

class App extends React.Component {
  render() {
    return (
      <div><Main /></div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)