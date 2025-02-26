import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [apiUsers, setApiUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setApiUsers(data.users);
        // update the filteredUsers state
        setFilteredUsers(data.users);
      })
      .catch((err) => {
        console.log(err);

        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = apiUsers.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      {loading && <p>Loading...</p>}

      {error && <p>There was an error loading the users</p>}

      {!loading && !error && filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
