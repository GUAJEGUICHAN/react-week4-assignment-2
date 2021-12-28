import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
test('App', () => {
  const { getByText } = render((
    <App />
  ))
  expect(getByText(/김밥제국/)).not.toBeNull()
});
