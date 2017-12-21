import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addItem, createList, removeItem, updateList, createItem} from './actions';
import {combineReducers, createStore} from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import groceryListApp from './reducers';



let store = createStore(groceryListApp);

let unsubscribe = store.subscribe(() => {

console.log(store.getState());
})




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
