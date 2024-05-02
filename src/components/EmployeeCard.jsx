import React from "react";
import { Link } from "react-router-dom";

const EmployeeCard = ({ employee, handleDelete }) => {
  const { id, employee_name } = employee;

  return (
    <div className="card">
      <h3>{employee_name}</h3>
      <p>ID: {id}</p>
      <div className="button-container">
        <div>
          <button onClick={() => handleDelete(id)} style={{marginRight:"10px"}}>Delete</button>
          <button>Edit</button>
        </div>
        <Link to={`/employee/${id}`}>
          <button className="button">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;
