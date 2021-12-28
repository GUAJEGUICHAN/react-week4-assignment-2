const initialState = {
  restaurants: []
};

export default function reducer(state = initialState, action) {
  const { restaurants } = action.payload;
  if (action.type = 'setRestaurants') {
    return {
      state,
      restaurants
    }
  }

  return state;
}
