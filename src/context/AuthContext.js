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
  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}
const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export default AuthContextProvider;
export { useAuth };
