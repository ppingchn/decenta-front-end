import { Modal } from 'bootstrap';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import LogoutButton from './LogoutButton';
import UserDetail from './UserDetail';

function UserProfile() {
  const { updateUser, user } = useAuth();
  const [username, setUsername] = useState(user.username);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [modal, setModal] = useState(null);
  const modalElement = useRef();
  const handleClickModal = () => {
    const modalObj = new Modal(modalElement.current);
    setModal(modalObj);
    modalObj.show();
  };
  const closeModal = () => {
    modal.hide();
  };
  const handleClickUpdate = async (e) => {
    e.preventDefault();
    updateUser({
      username,
      firstName,
      lastName,
      phoneNumber,
    });
    closeModal();
  };
  const {
    profilePic,
    department: { departmentName },
  } = user;
  return (
    <>
      <div role="button" onClick={() => handleClickModal()}>
        <UserDetail
          src={profilePic}
          username={user.username}
          department={departmentName}
        />
        <LogoutButton />
      </div>
      <div
        className="modal fade"
        id="modal-register"
        tabIndex="-1"
        ref={modalElement}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update user data
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeModal()}
              ></button>
            </div>
            <div className="modal-body" onSubmit={handleClickUpdate}>
              <form className="row gx-2 gy-3">
                <div className="col-6">
                  <label className="form-label">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="title"
                    value={username || ''}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Phonenumber</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="title"
                    value={phoneNumber || ''}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Firstname</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="title"
                    value={firstName || ''}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Lastname</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="title"
                    value={lastName || ''}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div className="pt-3 d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-green sea text-4.5 h-9 shadow-none d-flex justify-content-center align-items-center tw-px-10"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
