import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { changeRestaurantField } from './actions';

import RestaurantCreateContainer from './RestaurantCreateContainer';

const dispatch = jest.fn();
jest.mock('react-redux');

test('RestaurantCreateContainer', () => {
  // ^render이 잘되는가
  // useState 잘 되는가
  // ^입력 잘되기는지 useDispatch 점검
  // 버튼 되는지 useDispatch 점검
  useSelector.mockImplementation(
    (selector) => selector({
      restaurant: {
        name: '김밥제국',
        category: '분식',
        address: '서울시 강남구 역삼동',
      },
    }),
  );

  useDispatch.mockImplementation(
    () => dispatch,
  );

  const { getByText, getByDisplayValue } = render((
    <RestaurantCreateContainer />
  ));
  expect(getByDisplayValue(/김밥제국/)).not.toBeNull();
  expect(getByDisplayValue(/분식/)).not.toBeNull();
  expect(getByDisplayValue(/서울시 강남구 역삼동/)).not.toBeNull();
  expect(getByText(/등록/)).not.toBeNull();

  fireEvent.change(getByDisplayValue('김밥제국'), { target: { value: '김밥지옥' } });
  expect(dispatch).toBeCalledWith(changeRestaurantField('name', '김밥지옥'));
});
