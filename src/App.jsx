import { useEffect } from "react";
import { useState } from "react";
import ItemsList from "./components/ItemList";
import Input from "./components/Input";
import { useGetEmployees } from "./hooks/useGetEmployees";


function App() {
  const { employees, loading, error } = useGetEmployees();

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (Object.keys(employees).length > 0) {
      setFilteredUsers(employees)
    }
  }, [employees]);

  const filterItems = (searchTerm) => {
    const filteredItems = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
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
