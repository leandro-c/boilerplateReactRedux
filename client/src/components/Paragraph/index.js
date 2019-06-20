import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledParagraph } from './styles';

const Paragraph = styled(({
  id,
  value,
  className

}) => {
  return (
      <StyledParagraph id={id}>{value}</StyledParagraph>
  )
})``
Paragraph.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string
};
export {
  Paragraph
};