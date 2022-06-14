import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';

function Header() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light text-align-center d-flex flex-nowrap flex-column shadow mh-100 light-blue "
      style={{ height: '100vh', minWidth: '10rem' }}
    >
      <div className="container-fluid justify-content-center d-flex">
        <Link className="navbar-brand" to="/">
          <h1>DECENTA</h1>
        </Link>
      </div>
      <MenuBar />
    </nav>
  );
}

export default Header;
