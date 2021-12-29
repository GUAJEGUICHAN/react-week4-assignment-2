import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import restaurants from './fixtures/restaurants';
import RestaurantsContainer from './RestaurantsContainer';
import { setRestaurants } from './actions';
import RestaurantCreateContainer from './RestaurantCreateContainer';

export default function App() {
  const dispatch = useDispatch();
  // TODO: 초기 실행
  // restaurants에 데이터 넣기 => dispatch
  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantCreateContainer />
    </div>
  );
}
