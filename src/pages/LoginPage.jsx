import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div
      className="container-fluid dark-blue text-light-white box w-50 p-2"
      style={{ height: '30vh' }}
    >
      <div className="mt-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login({ username, password });
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                e.preventDefault();
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-flex align-items-center flex-column">
            <button type="submit" className="btn btn-light">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
