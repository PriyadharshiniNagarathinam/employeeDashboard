import React from 'react'
import { useParams } from "react-router-dom";

const EmployeeDetail = ({ employees }) => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) return <div>Employee not found</div>;

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.employee_name}</p>
      <p>ID: {employee.id}</p>
      <p>Salary: {employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
    </div>
  );
};

export default EmployeeDetail