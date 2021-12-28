import { render } from '@testing-library/react';
import restaurants from './fixtures/restaurants'
import { useSelector } from 'react-redux';

import App from './App';


jest.mock('react-redux')
test('App', () => {
  useSelector.mockImplementation((selector) => ({
    restaurants,

  }))
  const { getByText } = render((
    <App />
  ));
  expect(getByText(/김밥제국/)).not.toBeNull();
});
