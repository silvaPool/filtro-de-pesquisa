import { useState } from "react";

const users = [
  { firstName: "John", id: 1 },
  { firstName: "Emily", id: 2 },
  { firstName: "Michael", id: 3 },
  { firstName: "Sarah", id: 4 },
  { firstName: "David", id: 5 },
  { firstName: "Jessica", id: 6 },
  { firstName: "Daniel", id: 7 },
  { firstName: "Olivia", id: 8 },
  { firstName: "Matthew", id: 9 },
  { firstName: "Sophia", id: 10 },
];

function App() {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchItem = e.target.value;
    setSearchItem(searchItem);
  };

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
