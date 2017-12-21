


import {ADD_ITEM, REMOVE_ITEM, CREATE_ITEM, SET_PURCHASE_FILTER, SET_CATEGORY_FILTER, SET_PURCHASED} from './actions'
import {addItem, createList, removeItem, updateList, createItem} from './actions';



const initialState = {
  groceryList: [],
  purchaseFilter: 'SHOW_ALL',
  categoryFilter: 'SHOW_ALL',
  itemList: []
}

function groceryListApp(state = initialState, action) {
  switch(action.type){
    case ADD_ITEM:
      return{
        ...state,
        groceryList: [
          ...state.groceryList,
          action.data
        ]
      }
    case REMOVE_ITEM:
      return {
        ...state,
        groceryList: [
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
        
      }
    case CREATE_ITEM:
      return{
        ...state,
        itemList:[
          ...state.itemList,
          action.data
        ]
      }
    default:
      return state;
  }
}

export default groceryListApp
