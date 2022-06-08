import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
} from '../token/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const fetchMe = async () => {
    try {
      const token = getAccessToken();
      if (token) {
        const resMe = await axios.get('/auth/user');
        setUser(resMe.data.user);
      }
    } catch (err) {
      removeAccessToken();
      navigate('/login');
    }
  };
  useEffect(() => {
    fetchMe();
  }, []);
  const login = async (input) => {
    const res = await axios.post('/auth/login', input);
    setAccessToken(res.data.token);
    fetchMe();
  };
  const register = async (input, departmentName) => {
    const departmentId = await axios.post(`/department/${departmentName}`);
    input.append('departmentId', departmentId.data.id);
    await axios.post('/auth/register', input);
  };
  const logout = async () => {
    removeAccessToken();
    setUser(null);
    navigate('/');
  };
  return (
    <AuthContext.Provider value={{ login, register, user, logout }}>
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
