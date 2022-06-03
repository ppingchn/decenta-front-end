import React from 'react';
import MenuItem from './MenuItem';
import { BiLogIn } from 'react-icons/bi';
import { BsPencilFill } from 'react-icons/bs';

function MenuBar() {
  return (
    <div>
      <MenuItem icon={<BiLogIn />} title="Log in" />
      <MenuItem icon={<BsPencilFill />} title="Register" path="register" />
    </div>
  );
}

export default MenuBar;
