import { useEffect } from "react";
import { useState } from "react";
import TableDesktop from "./components/TableDesktop";
import Input from "./components/Input";
import { useGetEmployees } from "./hooks/useGetEmployees";
import TableAccordion from "./components/TableAccordion";
import HeaderPage from "./components/HeaderPage";

function App() {
  const { employees, loading, error } = useGetEmployees();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    if (Object.keys(employees).length > 0) {
      setFilteredEmployees(employees);
    }
  }, [employees]);

  const filterItems = (searchTerm) => {
    const filteredItems = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.admission_date
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        employee.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredEmployees(filteredItems);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HeaderPage />
      <div className="wrapper-components">
        <div className="wrapper-input">
          <p>Funcionários</p>
          <Input onChangeCallback={filterItems} />
        </div>
        {loading && <p>Loading...</p>}

        {error && <p>There was an error loading the users</p>}

        {!loading &&
          !error &&
          (isMobile ? (
            <TableAccordion items={filteredEmployees} />
          ) : (
            <TableDesktop items={filteredEmployees} />
          ))}

        {/* {!loading && !error && <ItemsList items={filteredEmployees} />} */}
      </div>

      {/* <TableAccordion items={employees} /> */}
    </>
  );
}

export default App;
