import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Card({ children }) {
  return <SCard>{children}</SCard>;
}

const SCard = styled.div`
  border-radius: 100px 0;
  padding-right: 20px;
  max-width: 300px;
`;

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Card;
