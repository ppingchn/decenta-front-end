import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../config/axios';
import { useAuth } from './AuthContext';

const employeeContext = createContext();
function EmployeeContextProvider({ children }) {
  const { user } = useAuth();
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState('');
  const getAllEmployees = async () => {
    try {
      const res = await axios.get('/user');
      setEmployees(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllEmployees();
  }, [user]);
  return (
    <employeeContext.Provider value={{ employees, setFilter, filter }}>
      {children}
    </employeeContext.Provider>
  );
}

export default EmployeeContextProvider;
const useEmployee = () => {
  const ctx = useContext(employeeContext);
  return ctx;
};
export { useEmployee };
