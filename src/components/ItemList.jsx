const ItemsList = ({ items }) => {
  return (
    <>
      {items.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {items.map((item) => (
            <div  key={item.id}>
            <li>{item.name}</li>
            <li>{item.job}</li>
            <li>{item.admission_date}</li>
            <li>{item.phone}</li>
            <li>{item.image}</li>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default ItemsList;
