import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import EmployeeDetail from "./components/EmployeeDetail";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data.data);
        setFilteredEmployees(data.data);
      })
      .catch((error) => console.error("Error fetching employees", error));
  }, []);

  const handleSearch = () => {
    if (searchId.trim() === "") {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter(
        (employee) => employee.id === parseInt(searchId)
      );
      setFilteredEmployees(filtered);
      console.log(searchId);
    }
  };

  const handleDelete = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
    setFilteredEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Employee Dashboard</h1>
              <Search
                searchName={searchId}
                setSearchName={setSearchId}
                handleSearch={handleSearch}
              />
              <Dashboard
                employees={filteredEmployees}
                handleDelete={handleDelete}
              />
            </>
          }
        />
        <Route
          path="/employee/:id"
          element={<EmployeeDetail employees={employees} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
