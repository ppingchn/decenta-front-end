import React, { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { HiUserCircle } from 'react-icons/hi';
import { Modal } from 'bootstrap';
import { useMeeting } from '../../context/MeetingContext';

function MeetingList({ title, meetingDate, id }) {
  const { meetingDetail, getMeetingDetail, agenda, deleteMeeting } =
    useMeeting();
  const formatDay = dayjs(meetingDate).format('DD');
  const formatMonth = dayjs(meetingDate).format('MM');
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
      <div className="mt-1 mx-4">
        <div
          className="gap-1 d-flex sea border rounded"
          role="button"
          onClick={() => {
            getMeetingDetail(id);
            handleClickModal();
          }}
        >
          <div
            className=" border border-1 ms-2 border-dark rounded-2 sky p-2 text-center"
            style={{ width: '17vh' }}
          >
            <p className="p-0 m-0 text-3 text-dark-blue">{formatDay}</p>
            <p className="p-0 m-0 text-3 text-dark-blue">{formatMonth}</p>
          </div>
          <span className="flex-grow-1 fs-5 text-center align-self-center">
            {title}
          </span>
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
                <h3 className="">{meetingDetail.title}</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="d-flex justify-content-between align-items-baseline  w-100">
                <p>{meetingDetail.meetingType}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteMeeting(id);
                    closeModal();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            {Object.keys(meetingDetail).length > 0 && (
              <div className="modal-body">
                <div className="row">
                  <div className="col-7 dark-blue border rounded">
                    <h2 className="text-light-white">Agenda</h2>
                    <div>
                      {agenda.map((el, idx) => {
                        return (
                          <div className="text-light-white row" key={idx}>
                            <span className="col-2">{idx + 1}</span>
                            <span className="col-9">{el.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="d-flex flex-column col-5 gap-4">
                    <div className="dark-blue text-center border rounded py-2">
                      <span className="text-light-white">
                        On {meetingDetail.meetingDate}
                      </span>
                    </div>
                    <div className=" sky d-flex border rounded justify-content-center flex-column align-items-center">
                      <p className="pt-1">Secretary of Meeting</p>
                      {meetingDetail.User.profilePic ? (
                        <img
                          className="rounded-circle border border-white "
                          src={meetingDetail.User.profilePic}
                          width="85"
                          height="85"
                        />
                      ) : (
                        <div className="">
                          <HiUserCircle size="85" />
                        </div>
                      )}
                      <h4 className="text-light-white ">
                        {meetingDetail.User.username}
                      </h4>
                      <div className="sea container-fluid">
                        <h4 className="text-center">Contract</h4>
                        <p className="text-center">
                          {meetingDetail.User.phoneNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetingList;
