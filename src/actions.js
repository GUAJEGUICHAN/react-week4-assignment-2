export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function changeRestaurantField(name, value) {
  return {
    type: 'changeRestaurantField',
    payload: {
      name, value,
    },
  };
}
// TODO: delete this.
export function xxx() {
}
