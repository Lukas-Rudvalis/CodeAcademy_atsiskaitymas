import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Grid({ children, className, cols = 3 }) {
  return (
    <SGrid cols={cols} className={className}>
      {children}
    </SGrid>
  );
}

const SGrid = styled.ul`
  display: grid;
  gap: 20px;
  margin-bottom: 50px;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(${({ cols }) => cols - 1}, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(${({ cols }) => cols - 2}, 1fr);
  }
`;

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
  cols: PropTypes.number,
};

export default Grid;
