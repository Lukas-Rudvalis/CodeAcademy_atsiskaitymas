import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function InputField({ type, ...rest }) {
  return type === 'textarea' ? (
    <Textarea rows={4} {...rest} />
  ) : (
    <Input {...rest} />
  );
}

const Input = styled.input`
  background-color: var(--light-gray);
  padding: 10px 20px;
  border: none;
  border-radius: 20px 0;
  font-size: 18px;
  width: 300px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;

  &::placeholder {
    color: var(--gray);
  }
`;
const Textarea = styled.textarea`
  background-color: var(--light-gray);
  padding: 10px 20px;
  border: none;
  border-radius: 20px 0;
  font-size: 18px;
  width: 300px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;

  &::placeholder {
    color: var(--gray);
  }
`;

InputField.propTypes = {
  type: PropTypes.string,
};

export default InputField;
