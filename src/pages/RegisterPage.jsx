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
    ProfilePicture: yup.mixed(),
  });
  const handleSubmit = (data, reset) => {
    console.log(data.ProfilePicture);

    const formData = new FormData();
    formData.append('username', data.Username);
    formData.append('password', data.Password);
    formData.append('confirmPassword', data.ConfirmPassword);
    formData.append('departmentName', data.DepartmentName);
    formData.append('firstName', data.FirstName);
    formData.append('lastName', data.LastName);
    formData.append('phoneNumber', data.PhoneNumber);
    formData.append('profilePic', data.ProfilePicture);
    register(formData, data.DepartmentName);
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
          <SubmitButton classname="btn sea" onSubmit={handleSubmit}>
            Submit
          </SubmitButton>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
