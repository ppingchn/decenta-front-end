import React from 'react';
import { useEmployee } from '../../context/EmployeeContext';
import EmployeesList from './EmployeesList';
import AllEmployees from './fetchCondition/AllEmployees';
import FilterEmployee from './fetchCondition/FilterEmployee';

function EmployeesContainer() {
  const { filter } = useEmployee();
  return (
    <div className="d-flex flex-column gap-4">
      {filter ? <FilterEmployee filter={filter} /> : <AllEmployees />}
    </div>
  );
}

export default EmployeesContainer;
