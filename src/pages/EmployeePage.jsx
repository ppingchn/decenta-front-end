import React from 'react';
import EmployeesContainer from '../component/Employee/EmployeesContainer';
import EmployeesFilter from '../component/Employee/EmployeesFilter';

function EmployeePage() {
  return (
    <div className="m-2 d-flex flex-column gap-2">
      <div className="d-flex justify-content-between">
        <h2>Employee</h2>
        <div>
          <EmployeesFilter />
        </div>
      </div>
      <div>
        <EmployeesContainer />
      </div>
    </div>
  );
}

export default EmployeePage;
