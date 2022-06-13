import { Modal } from 'bootstrap';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function EmployeesList({
  profilePic,
  firstName,
  lastName,
  phoneNumber,
  Department: { departmentName },
}) {
  const [modal, setModal] = useState(null);
  const modalElement = useRef();
  const handleClickModal = () => {
    const modalObj = new Modal(modalElement.current);
    setModal(modalObj);
    modalObj.show();
  };
  return (
    <>
      <div
        className="border border-1 ms-2 border-dark rounded-2 sea p-2 text-center d-flex gap-3"
        role="button"
        onClick={handleClickModal}
      >
        <img
          className="rounded-circle border border-white align-self-center"
          src={profilePic}
          width="40"
          height="40"
          alt="user"
        />
        <span className="flex-grow-1 fs-5 text-center align-self-center">
          {firstName}
        </span>
        <span className="flex-grow-1 fs-5 text-center align-self-center">
          {lastName}
        </span>
        <span
          className="flex-grow-1 fs-5 text-center align-self-center sky"
          style={{ maxWidth: '200px' }}
        >
          {departmentName}
        </span>
      </div>
      <div
        className="modal fade"
        id="modal-register"
        tabIndex="-1"
        ref={modalElement}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex flex-column">
              <div className="d-flex justify-content-between w-100">
                <h3 className="">Employee Detail</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
            </div>
            <div className="modal-body">
              <div className="d-flex gap-2 align-items-center">
                <div className="col-6 d-flex justify-content-center">
                  <img
                    className={`rounded-circle border border-white `}
                    src={profilePic}
                    width="150"
                    height="150"
                    alt="user"
                  />
                </div>
                <div className="col-6 d-flex flex-column gap-2">
                  <div>
                    <span className="flex-grow-1 fs-5 text-center align-self-center">
                      Firstname : {firstName}
                    </span>
                  </div>
                  <div>
                    <span className="flex-grow-1 fs-5 text-center align-self-center">
                      Lastname : {lastName}
                    </span>
                  </div>
                  <div>
                    <div>
                      <span className="flex-grow-1 fs-5 text-center align-self-center">
                        Phonenumber :
                      </span>
                    </div>
                    <span className="flex-grow-1 fs-5 text-center align-self-center">
                      {phoneNumber}
                    </span>
                  </div>
                  <div>
                    <div>
                      <span className="flex-grow-1 fs-5 text-center align-self-center">
                        Department :
                      </span>
                    </div>
                    <span className="flex-grow-1 fs-5 text-center align-self-center">
                      {departmentName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeesList;
