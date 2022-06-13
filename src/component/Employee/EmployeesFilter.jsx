import React from 'react';
import { departmentList } from '../../config/constant';
import { useEmployee } from '../../context/EmployeeContext';
function EmployeesFilter() {
  const { setFilter } = useEmployee();
  return (
    <div className="d-flex gap-2 align-items-center dark-blue p-2 border rounded">
      <span className="fs-4 text-light-white">Filter : </span>
      <div>
        <select
          className="form-select form-select-lg"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option key="0" value="">
            Find All
          </option>
          {departmentList.map((el, idx) => {
            return (
              <option key={idx} value={el.value}>
                {el.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default EmployeesFilter;
