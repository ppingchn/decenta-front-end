import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Authlayout from '../layout/Authlayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

function Router() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<Authlayout />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Authlayout />}>
            <Route path="" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="" />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
}

export default Router;
