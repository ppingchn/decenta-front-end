import { Modal } from 'bootstrap';
import React, { useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useProject } from '../../context/ProjectContext';
import { projectTypeList } from '../../config/constant';
function CreateProjectButton() {
  const {
    headProjectList,
    createProject,
    headProjectDetail,
    getHeadProjectDetail,
  } = useProject();
  const [projectName, setProjectName] = useState('');
  const [location, setLocation] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [scopeFeild, setScopeFeild] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectHeadId, setProjectHeadId] = useState(null);
  const [modal, setModal] = useState(null);
  const modalElement = useRef();
  const handleClickModal = () => {
    const modalObj = new Modal(modalElement.current);
    setModal(modalObj);
    modalObj.show();
  };
  const closeModal = () => {
    setLocation('');
    setProjectName('');
    setDueDate('');
    setProjectHeadId(null);
    setScopeFeild('');
    setProjectType('');
    modal.hide();
  };
  const handleClickCreate = async (e) => {
    e.preventDefault();
    createProject({
      projectName,
      location,
      dueDate,
      scopeFeild,
      projectType,
      projectHeadId,
    });
    closeModal();
  };
  return (
    <>
      <button
        type="button"
        className="btn sky px-3"
        onClick={() => {
          handleClickModal();
        }}
      >
        <AiOutlinePlus />
      </button>
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
                Create Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeModal()}
              ></button>
            </div>
            <div className="modal-body" onSubmit={handleClickCreate}>
              <form className="row gx-2 gy-3">
                <div className="col-6">
                  <label className="form-label">Project Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="title"
                    value={projectName || ''}
                    onChange={(e) => {
                      setProjectName(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">location</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="location"
                    value={location || ''}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Due Date</label>
                  <input
                    className="form-control"
                    type="date"
                    placeholder="location"
                    value={dueDate || ''}
                    onChange={(e) => {
                      setDueDate(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Scope Feild</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="location"
                    value={scopeFeild || ''}
                    onChange={(e) => {
                      setScopeFeild(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Project Type</label>
                  <select
                    className="form-control"
                    value={projectType || ''}
                    onChange={(e) => {
                      setProjectType(e.target.value);
                    }}
                  >
                    <option key="0" value={''}>
                      --- Select Project Type ---
                    </option>
                    {projectTypeList.map((el, idx) => {
                      return (
                        <option key={idx} value={el.value}>
                          {el.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Head Project</label>
                  <select
                    className="form-control"
                    value={projectHeadId || ''}
                    onChange={(e) => {
                      if (!e.target.value) {
                        setProjectHeadId(e.target.value);
                      }
                      setProjectHeadId(e.target.value);
                      getHeadProjectDetail(e.target.value);
                    }}
                  >
                    <option key="0" value={0}>
                      --- Select Member ---
                    </option>
                    {headProjectList.map((el, idx) => {
                      return (
                        <option key={idx} value={el.id}>
                          {el.username}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <h5>Head Project</h5>
                {headProjectDetail ? (
                  <>
                    <div className="border border-1 border-dark rounded-2 sea p-2 text-center d-flex gap-3">
                      <img
                        className={`rounded-circle border border-white `}
                        src={headProjectDetail?.profilePic}
                        width="40"
                        height="40"
                        alt="user"
                      />
                      <span className="flex-grow-1 fs-5 text-center align-self-center">
                        {headProjectDetail?.firstName}
                      </span>
                      <span className="flex-grow-1 fs-5 text-center align-self-center">
                        {headProjectDetail?.lastName}
                      </span>
                      <span className="flex-grow-1 fs-5 text-center align-self-center sky">
                        {headProjectDetail?.Department?.departmentName}
                      </span>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <div className="pt-3 d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-green sea text-4.5 h-9 shadow-none d-flex justify-content-center align-items-center tw-px-10"
                  >
                    Create
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

export default CreateProjectButton;
