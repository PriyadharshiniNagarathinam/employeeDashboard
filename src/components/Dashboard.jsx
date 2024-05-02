import React from "react";
import EmployeeCard from "./EmployeeCard";
import Search from "./Search";

const Dashboard = ({
  employees,
  handleDelete,
  searchId,
  setSearchId,
  handleSearch,
}) => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Employee Dashboard</h1>
      <Search
        searchId={searchId}
        setSearchId={setSearchId}
        handleSearch={handleSearch}
      />
      <div className="employee-cards-container">
        {/* {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            handleDelete={handleDelete}
          />
        ))} */}
        {employees.size > 0 ? (
          employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>No Employees Found</h3>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
