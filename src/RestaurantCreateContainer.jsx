import { useDispatch, useSelector } from 'react-redux';
import RestaurantForm from './RestaurantForm';

import { addRestaurant, changeRestaurantField } from './actions';

export default function RestaurantCreateContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleChange(name, value) {
    dispatch(changeRestaurantField(name, value));
  }
  function handleClick() {
    dispatch(addRestaurant());
  }
  return (
    <div>
      <RestaurantForm
        restaurant={restaurant}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
}
