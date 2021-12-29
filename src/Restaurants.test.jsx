// 우리가 Restaurants.jsx에 무엇을 쓸 것인가를 적자.
// App.test.jsx에서 가져와서 사용해보자

import { render } from '@testing-library/react';
import restaurants from './fixtures/restaurants';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const { getByText } = render((
    <Restaurants restaurants={restaurants} />
  ));
  expect(getByText(/김밥제국/)).not.toBeNull();
});
