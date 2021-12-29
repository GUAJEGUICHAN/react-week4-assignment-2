import {
  setRestaurants,
  changeRestaurantField,
  addRestaurant,
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

  describe('addRestaurant', () => {
    it('get the restaurant info on the list', () => {
      const initialState = {
        newId: 100,
        restaurant: {
          id: 0,
          name: 'a',
          category: 'b',
          address: 'c',
        },
        restaurants: [],
      };
      const state = reducer(initialState, addRestaurant());
      expect(state.restaurants).toHaveLength(1);
    });
  });
});
