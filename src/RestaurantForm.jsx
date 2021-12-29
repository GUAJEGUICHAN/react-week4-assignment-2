export default function RestaurantForm({ restaurant, onChange }) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChange(name, value);
  }
  return (
    <div>
      <input type="text" name="name" value={restaurant.name} onChange={handleChange} id="" />
      <input type="text" name="category" value={restaurant.category} onChange={handleChange} id="" />
      <input type="text" name="address" value={restaurant.address} onChange={handleChange} id="" />
      <button type="button">등록</button>
    </div>
  );
}
