import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function Form({ defaultValues, schema, children, classname, onSubmit }) {
  const method = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  return (
    <FormProvider {...method}>
      <form
        className={classname}
        onSubmit={method.handleSubmit((data) => onSubmit(data))}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
