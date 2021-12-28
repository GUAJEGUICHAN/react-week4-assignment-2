import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';


jest.mock('react-redux')
test('App', () => {
  useSelector.mockImplementation((selector) => ({
    restaurants: [{
      id: 1,
      name: '김밥제국',
      category: '분식',
      address: '서울시 강남구 역삼동 ',
    }]
  }))
  const { getByText } = render((
    <App />
  ));
  expect(getByText(/김밥제국/)).not.toBeNull();
});
