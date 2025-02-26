import { useEffect } from "react";
import { useState } from "react";
import ItemsList from "./components/ItemList";
import Input from "./components/Input";

function App() {
  const [apiUsers, setApiUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

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

  const filterItems = (searchTerm) => {
    const filteredItems = apiUsers.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  return (
    <>
      <Input onChangeCallback={filterItems} />
      {loading && <p>Loading...</p>}

      {error && <p>There was an error loading the users</p>}

      {!loading && !error && <ItemsList items={filteredUsers} />}
    </>
  );
}

export default App;
