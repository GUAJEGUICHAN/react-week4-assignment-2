//우리가 Restaurants.jsx에 무엇을 쓸 것인가를 적자.
//App.test.jsx에서 가져와서 사용해보자

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const restaurants = [{
    id: 1,
    name: '김밥제국',
    category: '분식',
    address: '서울시 강남구 역삼동 '
  }]
  const { getByText } = render((
    <Restaurants restaurants={restaurants} />
  ));
  expect(getByText(/김밥제국/)).not.toBeNull();
});


