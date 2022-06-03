import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';
function MenuItem({ icon, title, path }) {
  return (
    <div className="fs-4">
      <Link to={`/${path}`} className="text-decoration-none text-reset">
        {icon}
        <span className="ms-3">{title}</span>
      </Link>
    </div>
  );
}

export default MenuItem;
