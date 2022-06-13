import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Authlayout from '../layout/Authlayout';
import LoginPage from '../pages/LoginPage';
import MeetingPage from '../pages/MeetingPage';
import ProjectPage from '../pages/ProjectPage';
import RegisterPage from '../pages/RegisterPage';

function Router() {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<Authlayout />}>
            <Route path="" element={<MeetingPage />} />
            <Route path="project" element={<ProjectPage />} />
            <Route path="employee" element={<LoginPage />} />
          </Route>
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
