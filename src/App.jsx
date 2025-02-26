import { useEffect } from "react";
import { useState } from "react";
import ItemsList from "./components/ItemList";
import Input from "./components/Input";
import { useGetEmployees } from "./hooks/useGetEmployees";


function App() {
  const { employees, loading, error } = useGetEmployees();

  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    if (Object.keys(employees).length > 0) {
      setFilteredEmployees(employees)
    }
  }, [employees]);

  const filterItems = (searchTerm) => {
    const filteredItems = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.admission_date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.image.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredEmployees(filteredItems);
  };

  return (
    <>
      <Input onChangeCallback={filterItems} />
      {loading && <p>Loading...</p>}

      {error && <p>There was an error loading the users</p>}

      {!loading && !error && <ItemsList items={filteredEmployees} />}
    </>
  );
}

export default App;
