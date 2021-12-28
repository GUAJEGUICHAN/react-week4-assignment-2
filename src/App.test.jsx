import { render } from '@testing-library/react';
import restaurants from './fixtures/restaurants'
import { useDispatch, useSelector } from 'react-redux';

import App from './App';


jest.mock('react-redux')
test('App', () => {
  const dispatch = jest.fn()
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => ({
    restaurants,

  }))
  const { getByText } = render((
    <App />
  ));
  expect(dispatch).toBeCalled();
  expect(getByText(/김밥제국/)).not.toBeNull();
});
