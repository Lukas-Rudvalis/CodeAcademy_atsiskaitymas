import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Container({ children, className }) {
  return <SContainer className={className}>{children}</SContainer>;
}

const SContainer = styled.div`
  max-width: 1200px;
  padding-right: 10px;
  padding-left: 10px;
  margin: 0 auto;
`;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
};

export default Container;
