import { useEffect, useState } from "react";

export const useGetEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        return response.json();
      })

      .then((data) => {
        console.log("Dados recebidos:", data);
        setEmployees(data);
      })
      .catch((err) => {
        console.error("Erro na requisição:", err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { employees, loading, error };
};
