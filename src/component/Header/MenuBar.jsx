import React from 'react';
import MenuItem from './MenuItem';
import { BiLogIn, BiUser } from 'react-icons/bi';
import { BsPencilFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { useAuth } from '../../context/AuthContext';
import UserProfile from '../UserProfile/UserProfile';

function MenuBar() {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: '100vh' }}
        >
          <div>
            <MenuItem icon={<HiUserGroup />} title="Meeting" path="meeting" />
            <MenuItem
              icon={<AiOutlineFundProjectionScreen />}
              title="Project"
              path="project"
            />
            <MenuItem icon={<BiUser />} title="Employee" path="employee" />
          </div>
          <div className="align-items-end">
            <UserProfile user={user} />
          </div>
        </div>
      ) : (
        <div>
          <MenuItem icon={<BiLogIn />} title="Log in" />
          <MenuItem icon={<BsPencilFill />} title="Register" path="register" />
        </div>
      )}
    </>
  );
}

export default MenuBar;
