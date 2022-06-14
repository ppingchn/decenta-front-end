import React from 'react';
import { Link } from 'react-router-dom';
function MenuItem({ icon, title, path }) {
  return (
    <div className="fs-4" style={{ minWidth: '10rem' }}>
      <Link to={`/${path}`} className="text-decoration-none text-reset">
        {icon}
        <span className="ms-3">{title}</span>
      </Link>
    </div>
  );
}

export default MenuItem;
