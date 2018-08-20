const initialState = {
  productList: [],
  isDataLoaidng: false
};

export default function searchPageReducer(previousState = initialState, action) {
  switch (action.type) {
    case 'SEARCH_DATA_FETCHED':
      return {
        // ...previousState,
        productList: action.payload.productList
      };
    default:
      return previousState;
  }
}
