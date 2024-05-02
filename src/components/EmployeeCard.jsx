import React from "react";
import { Link } from "react-router-dom";

const EmployeeCard = ({ employee, handleDelete }) => {
  const { id, employee_name, profile_image, employee_age, employee_salary } = employee;
  const defaultProfileImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvh6ivEEWzzCFD6y4rOg3uEoDeWw99D9-0Weq5JIfITg&s";
  const profileImageUrl =
    profile_image === "" ? defaultProfileImage : profile_image;

  return (
    <div className="employee-card">
      <img
        src={profileImageUrl}
        alt={`Profile of ${employee_name}`}
        className="profile-image"
      />
      <hr className="separator" />
      <div className="employee-details">
        <p>
          <strong>Employee ID:</strong> {id}
        </p>
        <p>
          <strong>Employee Name:</strong> {employee_name}
        </p>
        <p>
          <strong>Salary</strong> {employee_salary}
        </p>
        <p>
          <strong>Age</strong> {employee_age}
        </p>
      </div>
        <hr className="separator" />
        <div className="button-container">
          <button className="button edit-button">Edit</button>
          <Link to={`/employee/${id}`}>
            <button className="button view-details-button">View Details</button>
          </Link>
        </div>
        <hr className="separator" />
        <button
          onClick={() => handleDelete(id)}
          className="button delete-button"
          style={{ marginRight: "10px" }}
        >
          Delete
        </button>
    </div>
  );
};

export default EmployeeCard;
