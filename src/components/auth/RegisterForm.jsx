import React from 'react';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function RegisterForm({ onRegister }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required field'),
      password: Yup.string()
        .min(6, 'At least 6 symbols')
        .required('Required field'),
    }),
    onSubmit: (values) => {
      onRegister(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="flex-form">
      <div>
        <InputField
          type="email"
          placeholder="Email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMsg>{formik.errors.email}</ErrorMsg>
        ) : null}
      </div>
      <div>
        <InputField
          type="password"
          placeholder="Password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMsg>{formik.errors.password}</ErrorMsg>
        ) : null}
      </div>
      <Button type="submit" className="mt20">
        Register
      </Button>
    </Form>
  );
}

const Form = styled.form`
  margin: 0 auto;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--light-gray);
  max-width: 500px;
`;

const ErrorMsg = styled.p`
  color: var(--error);
  font-size: 12px;
  text-align: left;
  margin-left: 20px;
`;

RegisterForm.propTypes = {
  onRegister: PropTypes.func,
};

export default RegisterForm;
