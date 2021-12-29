import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantCreateContainer from './RestaurantCreateContainer';

jest.mock('react-redux');

test('RestaurantCreateContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '김밥제국',
      category: '분식',
      address: '서울시 강남구 역삼동',
    },
  }));

  const { getByText, getByDisplayValue } = render((
    <RestaurantCreateContainer />
  ));
  expect(getByDisplayValue(/김밥제국/)).not.toBeNull();
  expect(getByDisplayValue(/분식/)).not.toBeNull();
  expect(getByDisplayValue(/서울시 강남구 역삼동/)).not.toBeNull();
  expect(getByText(/등록/)).not.toBeNull();
});
