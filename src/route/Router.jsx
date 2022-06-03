import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Authlayout from '../layout/Authlayout';
import LoginPage from '../pages/LoginPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Authlayout />}>
        <Route path="" element={<LoginPage />} />
        <Route path="register" element={<div>register</div>} />
        <Route path="*" element={<Navigate to="" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
