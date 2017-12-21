export const UPDATE_ITEM = "UPDATE_ITEM";
export const CREATE_LIST = "CREATE_LIST";
export const CREATE_ITEM = "CREATE_ITEM";
export const UPDATE_LIST = "UPDATE_LIST";

let itemId = 1;
let listId = 1;

export function updateItem(item){
  return {
    type: UPDATE_ITEM,
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
