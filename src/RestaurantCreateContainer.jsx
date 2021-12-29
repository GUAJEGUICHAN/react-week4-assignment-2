import { useDispatch, useSelector } from 'react-redux';
import RestaurantForm from './RestaurantForm';

import { changeRestaurantField } from './actions';

export default function RestaurantCreateContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleChange(name, value) {
    dispatch(changeRestaurantField(name, value));
  }

  return (
    <div>
      <RestaurantForm restaurant={restaurant} onChange={handleChange} />
    </div>
  );
}
