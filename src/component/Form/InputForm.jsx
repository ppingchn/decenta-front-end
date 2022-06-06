import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

function InputForm({
  name,
  type = 'text',
  containerClassname,
  className,
  ...props
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={containerClassname}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <>
              <label className="form-label">{name}</label>
              <input
                className={className}
                value={value}
                onChange={onChange}
                type={`${type}`}
                {...props}
              />
            </>
          );
        }}
        name={name}
      />
      {errors[name] && (
        <div className="is-invalid text-danger">{errors[name].message}</div>
      )}
    </div>
  );
}

export default InputForm;
