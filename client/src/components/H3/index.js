import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledH3 } from './styles';

const H3 = styled(({
  id,
  value,
  hasError,
  className

}) => {
  return (
    <div className={className}>
      <StyledH3 id={id}>{value}</StyledH3>
    </div>
  )
})``
H3.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string
};
export {
  H3
};