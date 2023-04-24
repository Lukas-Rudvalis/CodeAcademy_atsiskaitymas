import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

function Popup({ type, children }) {
  const [show, setShow] = useState(true);

  const close = () => setShow(false);
  setTimeout(close, type === 'error' ? 5000 : 2000);

  return show ? (
    <SPopup type={type}>
      {children}
      <button onClick={close}>
        <img src="/cross.webp" alt="cross" />
      </button>
    </SPopup>
  ) : null;
}

const SPopup = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 20px 0;
  font-size: 20px;
  justify-content: space-between;
  color: var(--dark-gray);
  button {
    border: none;
    padding: 0;
    background-color: inherit;
  }

  img {
    width: 24px;
  }

  ${({ type }) => types[type]};

  @media screen and (max-width: 550px) {
    max-width: 300px;
  }
`;

const types = {
  error: css`
    border: 2px solid #bd2e2e;
    background-color: #e7a3a3;
  `,
  success: css`
    border: 2px solid #2ebd2e;
    background-color: #abe6ae;
  `,
  info: css`
    border: 2px solid #5457f0;
    background-color: #a3aae0;
  `,
};

Popup.propTypes = {
  type: PropTypes.oneOf(['error', 'success', 'info']),
  children: PropTypes.string,
};

export default Popup;
