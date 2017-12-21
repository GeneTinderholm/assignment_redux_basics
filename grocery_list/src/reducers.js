


import {ADD_ITEM, REMOVE_ITEM, SET_PURCHASE_FILTER, SET_CATEGORY_FILTER, SET_PURCHASED} from './actions'
import {addItem, createList, removeItem, updateList, createItem} from './actions';



const initialState = {
  list: [],
  purchaseFilter: 'SHOW_ALL',
  categoryFilter: 'SHOW_ALL',
  purchased: 0,

}

function groceryListApp(state = initialState, action) {
  switch(action.type){
    case ADD_ITEM:
      return{
        ...state,
        list: [
          ...state.list,
          action.data
        ]
      }
    case REMOVE_ITEM:
      return {
        ...state,
        list: [
          ...action.data
        ]
      }
    case SET_PURCHASE_FILTER:
      return{
        ...state,
        purchaseFilter: action.data
      }
    case SET_CATEGORY_FILTER:
      return{
        ...state,
        purchaseFilter: action.data 
      }
    case SET_PURCHASED:
      return{
        ...state,
        purchased: action.data
      }
  }
}

export default groceryListApp
