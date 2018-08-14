const initialState = {
  count: 0
};
export default function searchPageReducer(previousState = initialState, action) {
  // some logic
  switch (action.type) {
    case 'increment':
      return {
        ...previousState,
        count: previousState.count + 1
      };

    case 'decrement':
      return {
        ...previousState,
        count: previousState.count - 1
      };

    default:
      break;
  }
  return previousState;
}
