import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledInput } from './styles';

const TextField = styled(({
  id,
  name,
  value,
  placeholder,
  type,
  onChange,
  onClick,
  disabled,
  className,
  checked
}) => {
  return (
    <div className={className}>
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
        disabled={disabled}
        checked={checked}
      />
    </div>
  )
})``
TextField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  hintText: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};
export {
  TextField
};