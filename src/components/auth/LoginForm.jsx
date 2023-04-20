import React from 'react';
import Title from '../../components/ui/Title';
import Container from '../../components/ui/Container';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

function LoginForm() {
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
    onSubmit: (values) => {},
  });

  return (
    <div>
      <Container className="tac">
        <Title fz={4} className="mb20">
          Login
        </Title>
        <form onSubmit={formik.handleSubmit} className="flex-form">
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
          <Button className="mt20">Login</Button>
        </form>
      </Container>
    </div>
  );
}

const ErrorMsg = styled.p`
  color: var(--error);
  font-size: 12px;
`;

export default LoginForm;
