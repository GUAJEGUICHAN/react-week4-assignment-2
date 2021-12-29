import { fireEvent, render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

jest.mock('react-redux');
test('RestaurantsCreateContainer', () => {
  // ^ onClick에 반응이 있는지 점검한다.
  // ^ 입력시 onChange에 반응이 있는지 점검한다.

  const handleChange = jest.fn();
  const onClick = jest.fn();
  const restaurant = {
    name: '김밥지옥',
    category: '분식',
    address: '수지구',
  };

  const { getByText, getByDisplayValue } = render((
    <RestaurantForm
      restaurant={restaurant}
      onClick={onClick}
      onChange={handleChange}
    />
  ));
  expect(getByDisplayValue('김밥지옥')).not.toBeNull();
  expect(getByDisplayValue('분식')).not.toBeNull();
  expect(getByDisplayValue('수지구')).not.toBeNull();
  expect(getByText('등록')).not.toBeNull();

  fireEvent.click(getByText('등록'));
  expect(onClick).toBeCalled();

  fireEvent.change(getByDisplayValue('김밥지옥'), { target: { value: '김밥천국' } });
  expect(handleChange).toBeCalled();
});
