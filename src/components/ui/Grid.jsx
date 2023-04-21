import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Grid({ children, className }) {
  return <SGrid className={className}>{children}</SGrid>;
}

const SGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
};

export default Grid;
