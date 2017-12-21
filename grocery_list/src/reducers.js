


import {ADD_ITEM, REMOVE_ITEM, CREATE_ITEM, SET_PURCHASE_FILTER, SET_CATEGORY_FILTER, PURCHASE_ITEM} from './actions'
import {addItem, createList, removeItem, updateList, createItem, purchaseItem} from './actions';



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
    case PURCHASE_ITEM:
      return{
        ...state,
        groceryList: 
        state.groceryList.map(item =>{
        if (item.name === action.data.name){
        return {...item, purchased: 1} 
        } else {
          return item
        }
     
        })
        
      }

    case FILTER_EVENT:
     return{
     ...state,
     groceryList:
     state.groceryList.map(item =>{
      if (item.purchased === state.purchaseFilter){
        return item
      }

     })


     }
   
    default:
      return state;
  }
}

export default groceryListApp
