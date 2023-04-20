import React from 'react';
import Title from '../../components/ui/Title';
import Container from '../../components/ui/Container';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';

function LoginForm() {
  return (
    <div>
      <div>
        <Container className="tac">
          <Title fz={4} className="mb20">
            Login
          </Title>
          <form className="flex-form">
            <InputField type="email" placeholder="Email" />
            <InputField
              type="password"
              placeholder="Password"
              className="mb20"
            />
            <Button>Login</Button>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default LoginForm;
