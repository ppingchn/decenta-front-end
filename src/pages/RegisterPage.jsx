import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Form from '../component/Form/Form';
import InputForm from '../component/Form/InputForm';
import SelectForm from '../component/Form/SelectForm';
import SubmitButton from '../component/Form/SubmitButton';
import { departmentList } from '../config/constant';
import { useAuth } from '../context/AuthContext';

function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const schema = yup.object().shape({
    Username: yup.string().required('Username is required'),
    Password: yup.string().required('Password is required'),
    ConfirmPassword: yup.string().required('Confirm Password is required'),
    DepartmentName: yup.string(),
    FirstName: yup.string().required('Firstname is required'),
    LastName: yup.string().required('Lastname is required'),
    PhoneNumber: yup.string(),
    ProfilePicture: yup.string().required('Profile Picture is required'),
  });
  const handleSubmit = (data, reset) => {
    console.log(data);
    register({
      username: data.Username,
      password: data.Password,
      confirmPassword: data.ConfirmPassword,
      departmentName: data.DepartmentName,
      firstName: data.FirstName,
      lastName: data.LastName,
      phoneNumber: data.PhoneNumber,
      profilePic: data.ProfilePicture,
    });
    navigate('/');
  };
  return (
    <div className="m-2">
      <h1>Register</h1>
      <div>
        <Form
          classname="row g-3 pt-3 m-1 gap-4"
          schema={schema}
          onSubmit={handleSubmit}
          defaultValues={{
            Username: '',
            Password: '',
            ConfirmPassword: '',
            DepartmentName: 'Administative',
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            ProfilePicture: '',
          }}
        >
          <div className="d-flex gap-4">
            <InputForm
              containerClassname="col-md-6 px-4"
              className="form-control"
              name={'Username'}
            />
            <InputForm
              type="password"
              containerClassname="col-md-6 px-4"
              className="form-control"
              name={'Password'}
            />
          </div>
          <div className="d-flex gap-4">
            <InputForm
              type="password"
              containerClassname="col-md-6 px-4"
              className="form-control"
              name={'ConfirmPassword'}
            />
            <SelectForm
              data={departmentList}
              containerClassname="col-md-6 px-4"
              className="form-control"
              name={'DepartmentName'}
            />
          </div>
          <h3>Personal Detail</h3>
          <div className="d-flex gap-4">
            <InputForm
              containerClassname="col-md-6 px-4"
              className="form-control"
              name={'FirstName'}
            />
            <InputForm
              containerClassname="col-md-6 px-4"
              className="form-control"
              name={'LastName'}
            />
          </div>
          <div className="d-flex gap-4">
            <InputForm
              containerClassname="col-md-6 px-4"
              className="form-control"
              name={'PhoneNumber'}
            />
            <InputForm
              type="file"
              containerClassname="col-md-6 px-4"
              className="form-control"
              name={'ProfilePicture'}
            />
          </div>
          <SubmitButton classname="btn btn-light" onSubmit={handleSubmit}>
            Submit
          </SubmitButton>
        </Form>
        {/* <form className="row g-3 pt-3 m-1" onSubmit={() => register({})}>
          <>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Confirmpassword
              </label>
              <input
                type="password"
                className="form-control"
                id="inputConfirmPassword4"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputConfirmPassword4" className="form-label">
                Department
              </label>
              <select
                id="inputState"
                class="form-select"
                onChange={(e) => setDepartmentName(e.target.value)}
              >
                <option value={ADMINISTATIVE} selected>
                  Administative
                </option>
                <option value={TREASURER}>Treasurer</option>
                <option value={MARKETING}>Marketing</option>
                <option value={PUBLIC_RELATION}>Public Relation</option>
                <option value={EVENT_ORGANIZER}>Event Organizer</option>
                <option value={INTERNATIONAL_SERVICE}>
                  International Service
                </option>
                <option value={HUMAN_RESOURCE}>Human Resource</option>
              </select>
            </div>
          </>
          <>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Firstname
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label
                htmlFor="inputEmail4"
                className="form-label"
                onChange={(e) => setLastName(e.target.value)}
              >
                Lastname
              </label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="inputEmail4"
                className="form-label"
                onChange={(e) => setPhoneNumber(e.target.value)}
              >
                Phonenumber
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                onChange={(e) => setProfilePic(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Profile Picture
              </label>
              <input type="file" className="form-control" id="inputEmail4" />
            </div>
          </>
          <div className="d-flex align-items-center flex-column">
            <button type="submit" className="btn btn-light">
              Submit
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default RegisterPage;
