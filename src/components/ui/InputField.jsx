import React from 'react';
import styled from 'styled-components';

function InputField({ ...rest }) {
  return <Input {...rest} />;
}

const Input = styled.input`
  background-color: var(--light-gray);
  padding: 10px 20px;
  border: none;
  border-radius: 20px 0;
  font-size: 18px;
  width: 300px;

  &::placeholder {
    color: var(--gray);
  }
`;

export default InputField;
