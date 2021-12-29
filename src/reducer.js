const initialState = {
  restaurant: {},
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants: [...state.restaurants, ...restaurants],
    };
  }
  if (action.type === 'changeRestaurantField') {
    const { name, value } = action.payload;
    return {
      ...state,
      restaurant: {
        [name]: value,
      },
    };
  }
  return state;
}
