import React from 'react';
import Title from '../../components/ui/Title';
import Container from '../../components/ui/Container';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GoogleLogin from './GoogleLogin';
import { Link } from 'react-router-dom';

function LoginForm({ onLogin }) {
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
      onLogin(values);
    },
  });

  return (
    <div>
      <Container className="tac">
        <Title fz={4} className="mb20">
          Login
        </Title>
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
            Login
          </Button>
        </Form>
        <GoogleLogin />
        <Text className="mt20">
          Don't have an account yet? <Link to={'/register'}>Register</Link>
        </Text>
      </Container>
    </div>
  );
}

const Form = styled.form`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--light-gray);
`;

const Text = styled.p`
  color: var(--gray);
  font-size: 14px;

  a {
    text-decoration: underline;

    &:hover {
      color: var(--brown);
    }
  }
`;

const ErrorMsg = styled.p`
  color: var(--error);
  font-size: 12px;
  text-align: left;
  margin-left: 20px;
`;

LoginForm.propTypes = {
  onLogin: PropTypes.func,
};

export default LoginForm;
