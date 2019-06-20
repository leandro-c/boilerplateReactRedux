import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledH1 } from './styles';

const H1 = styled(({
  id,
  value,
  hasError,
  className

}) => {
  return (
    <div className={className}>
      <StyledH1 id={id}>{value}</StyledH1>
    </div>
  )
})``
H1.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string
};
export {
  H1
};