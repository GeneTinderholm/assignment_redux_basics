import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createItem, createList, updateItem, updateList} from './actions';
import {combineReducers, createStore} from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const groceryApp = combineReducers({
  //todo
})

let store = createStore(groceryApp);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
