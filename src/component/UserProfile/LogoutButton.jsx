import React from 'react';
import { useAuth } from '../../context/AuthContext';

function LogoutButton() {
  const { logout } = useAuth();
  return (
    <div className="d-flex justify-content-center">
      <button
        className="btn dark-blue text-light-white"
        type="button"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
