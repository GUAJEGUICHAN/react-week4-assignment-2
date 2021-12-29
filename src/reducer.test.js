import {
  setRestaurants,
  changeRestaurantField,
} from './actions';
import restaurants from './fixtures/restaurants';
import reducer from './reducer';

describe('reducer', () => {
  describe('setRestaurant', () => {
    it('change restaurants array', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurantFiled', () => {
    it('change name,value', () => {
      const initialState = {
        restaurant: {
          name: '',
        },
      };
      const state = reducer(initialState, changeRestaurantField('name', '김밥지옥'));

      expect(state.restaurant.name).toBe('김밥지옥');
    });
  });
});
