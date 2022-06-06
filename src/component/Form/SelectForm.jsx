import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

function SelectForm({
  name,
  containerClassname,
  className,
  data = [],
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
              <select
                className={className}
                value={value}
                onChange={onChange}
                {...props}
              >
                {data.map((el, idx) => {
                  return (
                    <option key={idx} value={el.value}>
                      {el.label}
                    </option>
                  );
                })}
              </select>
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

export default SelectForm;
