const intialState = {
  count: 0
};

export default function favProductsReducer(previousState = intialState, action) {
  console.log('action: ', action);
  console.log('previousState: ', previousState);
  switch (action.type) {
    case 'increment':
      return {
        count: previousState.count + 1
      };

    case 'decrement':
      return {
        count: previousState.count - 1
      };

    default:
      break;
  }
  return {
    count: 0
  };
}
