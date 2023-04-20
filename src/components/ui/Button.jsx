import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Button({ children, className }) {
  return <SButton className={className}>{children}</SButton>;
}

const SButton = styled.button`
  background-color: var(--green);
  border-radius: 20px 0;
  font-size: 18px;
  color: white;
  font-weight: 600;
  padding: 0.5rem 1.8rem;
  border: 1px solid var(--green);
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--green-hover);
    border-color: var(--green-hover);
  }
`;

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
