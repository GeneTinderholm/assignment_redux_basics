const initialState = {
  list: [],
  purchaseFilter: 'SHOW_ALL',
  categoryFilter: 'SHOW_ALL',
}

function groceryListApp(state = initialState, action) {
  switch(action.type){
    case ADD_ITEM:
      return{
        ...state,
        list[
          ...state.list,
          action.data
        ]
      }
    case REMOVE_ITEM:
      return{
        ...state,
        list[
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
  }
}
