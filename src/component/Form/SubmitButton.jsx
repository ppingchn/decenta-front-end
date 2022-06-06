import React from 'react';
import { useFormContext } from 'react-hook-form';

function SubmitButton({ onSubmit, children, classname }) {
  const { handleSubmit, reset } = useFormContext();
  return (
    <button
      className={classname}
      type="submit"
      onClick={handleSubmit((data) => {
        onSubmit(data, reset);
      })}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
