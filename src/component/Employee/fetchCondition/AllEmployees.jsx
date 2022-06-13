import React from 'react';
import { useEmployee } from '../../../context/EmployeeContext';
import EmployeesList from '../EmployeesList';

function AllEmployees() {
  const { employees } = useEmployee();
  return (
    <div className="d-flex flex-column gap-4">
      {employees.map((el, idx) => {
        return (
          <EmployeesList
            key={idx}
            phoneNumber={el.phoneNumber}
            profilePic={el.profilePic}
            firstName={el.firstName}
            lastName={el.lastName}
            Department={el.Department}
          />
        );
      })}
    </div>
  );
}

export default AllEmployees;
