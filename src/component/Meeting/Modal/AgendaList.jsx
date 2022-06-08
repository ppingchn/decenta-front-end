import React from 'react';

function AgendaList({ title, idx }) {
  return (
    <div className="mt-1 mx-4">
      <div className="gap-1 d-flex sea border rounded" role="button">
        <div
          className=" border border-1 ms-2 border-dark rounded-2 sky p-2 text-center"
          style={{ width: '5vh' }}
        >
          <p className="p-0 m-0 text-3 text-dark-blue">{idx}</p>
        </div>
        <span className="flex-grow-1 fs-5 text-center align-self-center">
          {title}
        </span>
      </div>
    </div>
  );
}

export default AgendaList;
