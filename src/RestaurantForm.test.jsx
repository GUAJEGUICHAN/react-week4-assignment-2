import { render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

jest.mock('react-redux');
test('RestaurantsCreateContainer', () => {
  const restaurant = {
    name: '김밥지옥',
    category: '분식',
    address: '수지구',
  };

  const { getByText, getByDisplayValue } = render((
    <RestaurantForm
      restaurant={restaurant}
    />
  ));
  expect(getByDisplayValue('김밥지옥')).not.toBeNull();
  expect(getByDisplayValue('분식')).not.toBeNull();
  expect(getByDisplayValue('수지구')).not.toBeNull();
  expect(getByText(/등록/)).not.toBeNull();
});
