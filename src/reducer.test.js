import { setRestaurants } from './actions';
import restaurants from './fixtures/restaurants';
import reducer from './reducer';

describe('reducer', () => {
  describe('setRestaurant', () => {
    it('change restaurants array', () => {
      const initialState = {
        restaurants: []
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    })


  })
});
