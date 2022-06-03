import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';

function Header() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light text-align-center align-items-center d-flex flex-column shadow mh-100 light-blue "
      style={{ height: '100vh' }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h1>DECENTA</h1>
        </Link>
      </div>
      <MenuBar />
    </nav>
  );
}

export default Header;
