import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addItem, createList, removeItem, updateList, createItem} from './actions';
import {ADD_ITEM, REMOVE_ITEM, SET_PURCHASE_FILTER, SET_CATEGORY_FILTER, SET_PURCHASED} from './actions'
import {combineReducers, createStore} from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import groceryListApp from './reducers';



let store = createStore(groceryListApp);

let unsubscribe = store.subscribe(() => {

console.log(store.getState());
})

console.log(store.getState());
store.dispatch({
  type: ADD_ITEM,
  data: {
    name: "Tomato",
    description: "Malesuada eget, pretium ut, sapien. Suspendisse placerat lectus venenatis lorem. Sed.",
    amount: 1,
    purchased: 1
  }
});

store.dispatch({
  type: ADD_ITEM,
  data: {
    name: "Medical Cannabis",
    description: "Hendrerit at, est. Vivamus eget eros. Phasellus congue",
    amount: 300,
    purchased: 1
  }
});

store.dispatch(addItem({
  data: {
    name: "Non-Medical Cannabis",
    description: " Quam ac metus. Phasellus est nibh, bibendum non, dictum sed, vehicula.",
    amount: 400000000000000000000,
    purchased: 1
}}));
console.log(store.getState());
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
