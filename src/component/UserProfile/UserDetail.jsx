import React from 'react';
import { HiUserCircle } from 'react-icons/hi';

function UserDetail({ src, username, department }) {
  return (
    <div className="d-flex flex-row">
      {src ? (
        <img
          className={`rounded-circle border border-white `}
          src={src}
          width="40"
          height="40"
          alt="user"
        />
      ) : (
        <HiUserCircle size={50} />
      )}
      <div className="d-flex flex-column">
        <span>{username}</span>
        <span>{department}</span>
      </div>
    </div>
  );
}

export default UserDetail;
