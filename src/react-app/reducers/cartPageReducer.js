const initialState = {
  cartItemCount: 0,
  cartItemList: []
};

export default function cartPageReducer(previousState = initialState, action) {
  switch (action.type) {
    case 'ITEM_ADDED':
      return {
        ...previousState,
        cartItemCount: previousState.cartItemCount + 1,
        cartItemList: [...previousState.cartItemList, action.payload]
      };

    case 'ITEM_REMOVED':
      return {
        ...previousState,
        cartItemCount: previousState.cartItemCount - 1
      };

    default:
      return previousState;
  }
}
