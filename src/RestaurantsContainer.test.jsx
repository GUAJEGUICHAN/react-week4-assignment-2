import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
test('RestaurantsContainer', () => {
  const { getByText } = render((
    <RestaurantsContainer />
  ));
  expect(getByText(/김밥제국/)).not.toBeNull();
});
