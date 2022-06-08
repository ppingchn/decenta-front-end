import React from 'react';

import { useMeeting } from '../../context/MeetingContext';
import MeetingList from './MeetingList';
import CreateMeeting from './Modal/CreateMeeting';

function MeetingContainer() {
  const { meeting } = useMeeting();

  return (
    <div className="dark-blue mx-5" style={{ height: '85vh' }}>
      <div className="d-flex ms-1 mt-2 justify-content-between">
        <h2 className="text-light-white">Meeting List</h2>
        <CreateMeeting />
      </div>
      <div className="d-flex flex-column gap-4">
        {meeting?.map((el, idx) => {
          return (
            <MeetingList
              key={idx}
              title={el.title}
              meetingDate={el.meetingDate}
              id={el.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MeetingContainer;
