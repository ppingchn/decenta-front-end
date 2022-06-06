import { createContext, useContext, useState } from 'react';
import axios from '../config/axios';
import { setAccessToken } from '../token/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = async (input) => {
    const res = await axios.post('/auth/login', input);
    setAccessToken(res.data.token);
  };
  const register = async (input) => {
    console.log(input);
    const departmentId = await axios.post(
      `/department/${input.departmentName}`
    );
    console.log(departmentId);
    input.departmentId = departmentId.data.id;
    const res = await axios.post('/auth/register', input);
  };
  return (
    <AuthContext.Provider value={{ login, register }}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export default AuthContextProvider;
export { useAuth };
