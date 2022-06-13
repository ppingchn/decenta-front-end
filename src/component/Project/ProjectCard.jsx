import React, { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Modal } from 'bootstrap';
import { useProject } from '../../context/ProjectContext';

function ProjectCard({ dueDate, projectName, projectType, data }) {
  const { deleteProject } = useProject();
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
  return (
    <>
      <div
        className="dark-blue col-3 px-2 py-4 d-flex gap-3 flex-column align-items-center rounded h-50"
        style={{ minWidth: '150px', maxWidth: '215px' }}
        role="button"
        onClick={handleClickModal}
      >
        <h3 className="text-light-white">{dayjs(dueDate).format('DD/MM')}</h3>
        <div className="sky text-dark-blue px-3 border rounded">
          <span className="text-center">{projectName}</span>
        </div>
        <div className="light-white text-dark-blue d-flex align-items-center px-3 border rounded">
          <span>{projectType}</span>
        </div>
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
                <h3 className="">Project Detail</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="d-flex justify-content-between align-items-baseline  w-100">
                <p></p>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteProject(data.id);
                    closeModal();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="modal-body">
              <div className="row d-flex gap-2">
                <div className="col-12 dark-blue d-flex justify-content-between border rounded">
                  <span className="text-light-white">{projectName}</span>
                  <span className="text-light-white">
                    Due Date : {dayjs(dueDate).format('DD/MM/YYYY')}
                  </span>
                </div>
                <div className="col-12 sky border rounded">
                  <div className="d-flex justify-content-between">
                    <span className="text-light-white">Location</span>
                    <span className="text-light-white">{data.location}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-light-white">Scope Feild</span>
                    <span className="text-light-white">{data.scopeFeild}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-light-white">Project Type</span>
                    <span className="text-light-white">{data.projectType}</span>
                  </div>
                </div>
                <h4>Head Project</h4>
                <div className="col-12 border border-1 border-dark rounded-2 sea p-2 text-center d-flex gap-3">
                  <img
                    className={`rounded-circle border border-white `}
                    src={data.User.profilePic}
                    width="40"
                    height="40"
                    alt="user"
                  />
                  <span className="flex-grow-1 fs-5 text-center align-self-center">
                    {data.User.firstName}
                  </span>
                  <span className="flex-grow-1 fs-5 text-center align-self-center">
                    {data.User.lastName}
                  </span>
                  <span className="flex-grow-1 fs-5 text-center align-self-center sky">
                    {data.User.Department.departmentName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
