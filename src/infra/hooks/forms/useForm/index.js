import React from 'react';

// custom hook
const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      setValues((currentValue) => ({
        ...currentValue,
        [fieldName]: value,
      }));
    },
  };
};

export default useForm;
