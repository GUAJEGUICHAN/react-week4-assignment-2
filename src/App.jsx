import restaurants from './fixtures/restaurants';
import Restaurants from './Restaurants';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
