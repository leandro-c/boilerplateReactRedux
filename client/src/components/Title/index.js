import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledTitle } from './styles';

const Title = styled(({
  id,
  value,
  className

}) => {
  return (
      <StyledTitle id={id}>{value}</StyledTitle>
  )
})``
Title.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string
};
export {
  Title
};