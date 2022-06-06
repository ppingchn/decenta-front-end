import React from 'react';
import LogoutButton from './LogoutButton';
import UserDetail from './UserDetail';

function UserProfile({ user }) {
  const {
    profilePic,
    username,
    department: { departmentName },
  } = user;
  return (
    <div>
      <UserDetail
        src={profilePic}
        username={username}
        department={departmentName}
      />
      <LogoutButton />
    </div>
  );
}

export default UserProfile;
