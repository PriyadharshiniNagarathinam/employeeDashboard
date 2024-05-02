import EmployeeCard from "./EmployeeCard";

const Dashboard = ({ employees, handleDelete }) => {
  return (
    <div>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Dashboard;
