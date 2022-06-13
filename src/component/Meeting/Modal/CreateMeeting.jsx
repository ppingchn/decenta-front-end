import { Modal } from 'bootstrap';
import React, { useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { create } from 'yup/lib/array';
import { useMeeting } from '../../../context/MeetingContext';
import AgendaList from './AgendaList';
function CreateMeeting() {
  const [onHold, setOnHold] = useState([]);
  const { secretary } = useMeeting();
  const [modal, setModal] = useState(null);
  const [title, setTitle] = useState('');
  const [agendaOnHold, setAgendaOnHold] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingType, setMeetingType] = useState('');
  const [secretaryId, setSecreataryId] = useState(null);
  const [agenda, setAgenda] = useState([]);
  const modalElement = useRef();
  const { createMeeting } = useMeeting();
  const handleClickModal = () => {
    const modalObj = new Modal(modalElement.current);
    setModal(modalObj);
    modalObj.show();
  };
  const standbyAddAgenda = (input) => {
    onHold.push(input);
    setAgendaOnHold('');
  };
  const closeModal = () => {
    setTitle('');
    setMeetingDate('');
    setMeetingType('');
    setSecreataryId(null);
    setAgenda(null);
    setAgendaOnHold('');
    setOnHold([]);
    modal.hide();
  };
  const handleClickCreate = async (e) => {
    try {
      e.preventDefault();
      await createMeeting({
        title,
        meetingDate,
        meetingType,
        secretaryId,
        agenda: onHold,
      });
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button className="btn sea me-1 btn-sm" onClick={handleClickModal}>
        <AiOutlinePlus size={17} />
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
              <h5 className="modal-title">Meeting Create</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row gx-2 gy-3" onSubmit={handleClickCreate}>
                <div className="col-6">
                  <label className="form-label">title</label>
                  <input
                    className="form-control"
                    type="text"
                    value={title}
                    placeholder="title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Date</label>
                  <input
                    className="form-control"
                    type="date"
                    value={meetingDate || ''}
                    placeholder="title"
                    onChange={(e) => {
                      setMeetingDate(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Secretary</label>
                  <select
                    className="form-control"
                    value={secretaryId ?? ''}
                    placeholder="title"
                    onChange={(e) => {
                      setSecreataryId(e.target.value);
                    }}
                  >
                    <option key="0" value={''}>
                      ---Select Secretary---
                    </option>
                    ;
                    {secretary.map((el, idx) => {
                      return (
                        <option key={idx} value={el.id}>
                          {el.username}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Meeting Type</label>
                  <input
                    className="form-control"
                    type="text"
                    value={meetingType}
                    placeholder="Meeting Type"
                    onChange={(e) => {
                      setMeetingType(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <h5 className="modal-title">Meeting Agenda</h5>
                  <div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Agenda"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        value={agendaOnHold || ''}
                        onChange={(e) => {
                          setAgendaOnHold(e.target.value);
                        }}
                      />
                      <button
                        className="btn btn-outline-secondary sea"
                        type="button"
                        id="button-addon2"
                        onClick={() => {
                          standbyAddAgenda(agendaOnHold);
                        }}
                      >
                        <AiOutlinePlus size={17} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  {onHold.map((el, idx) => {
                    return <AgendaList key={idx} title={el} idx={idx + 1} />;
                  })}
                </div>
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

export default CreateMeeting;
