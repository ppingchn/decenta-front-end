import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';

function Authlayout() {
  return (
    <div className="d-flex align-items-center">
      <div className="col-3 box" style={{ minWidth: '20rem' }}>
        <Header />
      </div>
      <div className="col-9 border">
        <Outlet />
      </div>
    </div>
  );
}

export default Authlayout;
