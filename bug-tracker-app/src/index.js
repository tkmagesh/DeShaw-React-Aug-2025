import React from 'react';
import ReactDOM from 'react-dom/client';
import * as bugActionCreators from './bugs/actions'
import Bugs from './bugs';
import store from './store';
import { bindActionCreators } from 'redux';

const bugActionDispatchers = bindActionCreators(
  bugActionCreators,
  store.dispatch
);
const root = ReactDOM.createRoot(document.getElementById("root"));

function renderApp() {
  const bugs = store.getState();
  root.render(
    <div>
      <h1>Bug Tracker</h1>
      <hr/>
      <Bugs bugs={bugs} {...bugActionDispatchers} />
    </div>)
}
renderApp();
store.subscribe(renderApp);

