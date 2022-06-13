import React from 'react';
import { useEmployee } from '../../../context/EmployeeContext';
import EmployeesList from '../EmployeesList';

function FilterEmployee({ filter }) {
  const { employees } = useEmployee();
  const filterEmployee = employees.filter(
    (el) => el.Department.departmentName === filter
  );
  return (
    <div className="d-flex flex-column gap-4">
      {filterEmployee.map((el, idx) => {
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

export default FilterEmployee;
