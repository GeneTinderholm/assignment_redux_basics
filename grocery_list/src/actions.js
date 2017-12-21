export const ADD_ITEM = "ADD_ITEM";
export const CREATE_LIST = "CREATE_LIST";
export const CREATE_ITEM = "CREATE_ITEM";
export const UPDATE_LIST = "UPDATE_LIST";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SET_PURCHASED = "SET_PURCHASED";
export const SET_PURCHASE_FILTER = "SET_PURCHASE_FILTER";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";

let itemId = 1;
let listId = 1;


export function setPurchased(purchased,id) {
  return {
    type: SET_PURCHASED,
    data: {
    purchased,
    id,
  }
  }
}

export function setPurchaseFilter(purchaseFilter){
  return{
  type: SET_PURCHASE_FILTER,
  purchaseFilter: purchaseFilter,
}
}

export function setCategoryFilter(categoryFilter){
  return {
    type: SET_CATEGORY_FILTER,
    categoryFilter: categoryFilter,
  }
}

export function addItem(item){
  return {
    type: ADD_ITEM,
    item,
  }

}

export function updateList(list){
  return {
    type: UPDATE_LIST,
    list,
  }
}

export function createItem(data){
  return{
    type: CREATE_ITEM,
    data: {
      ...data,
      id: itemId++,
    }
  }
}

export function createList(data){
  return{
    type: CREATE_LIST,
    data: {
      ...data,
      id: listId++,
    }
  }
}

export function removeItem(data, item){
  return{
    type: REMOVE_ITEM,
    data: {
      ...data.filter(x=>{
        x.id != item.id;
      })
    }
  }

}