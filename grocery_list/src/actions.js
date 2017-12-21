export const ADD_ITEM = "ADD_ITEM";
export const CREATE_LIST = "CREATE_LIST";
export const CREATE_ITEM = "CREATE_ITEM";
export const UPDATE_LIST = "UPDATE_LIST";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const PURCHASE_ITEM = "PURCHASE_ITEM";
export const SET_PURCHASE_FILTER = "SET_PURCHASE_FILTER";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
export const FILTER_EVENT = "FILTER_EVENT";

let itemId = 1;
let listId = 1;




export function setPurchaseFilter({data}){
  return{
  type: SET_PURCHASE_FILTER,
  data,
}
}

export function setCategoryFilter({data}){
  return {
    type: SET_CATEGORY_FILTER,
    data,
  }
}

export function addItem({data}){
  return {
    type: ADD_ITEM,
    data,
  }

}

export function purchaseItem({data}){
  return {
    type: PURCHASE_ITEM,
    data,
  }

}

