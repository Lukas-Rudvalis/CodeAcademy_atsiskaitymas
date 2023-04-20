import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

function Title({ children, h = 1, fz = 3 }) {
  return (
    <STitle h={h} as={`h${h}`} fz={fz}>
      {children}
    </STitle>
  );
}

const STitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: var(--black);
  font-size: ${({ fz }) => fz}rem;

  ${({ h }) =>
    h === 1 &&
    css`
      font-size: 7.2rem;
      font-weight: 600;
    `}
`;

Title.propTypes = {
  children: PropTypes.string.isRequired,
  fz: PropTypes.number,
  h: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

export default Title;
