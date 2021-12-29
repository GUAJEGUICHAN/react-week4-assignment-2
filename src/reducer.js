const initialState = {
  newId: 100,
  restaurant: {
    id: 0,
    name: '',
    category: '',
    address: '',
  },
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
        ...state.restaurant,
        [name]: value,
      },
    };
  }
  if (action.type === 'addRestaurant') {
    // 입력창에 있던 갑들은 ''으로
    // restaurants에 개체 하나 추가
    return {
      newId: state.newId + 1,
      restaurant: {
        id: state.newId + 1,
        name: '',
        category: '',
        address: '',
      },
      restaurants: [
        ...state.restaurants,
        state.restaurant,
      ],
    };
  }
  return state;
}
