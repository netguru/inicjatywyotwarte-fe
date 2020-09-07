import React from 'react'
import styled from 'styled-components'
import Label from 'components/FormPrimitives/FieldLabel/FieldLabel'
import Error from 'components/FormPrimitives/FieldError/FieldError'

const InputBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.checkboxes ? 'row' : 'column')};
  margin-bottom: 1.5rem;
  width: 100%;
`
InputBox.displayName = "InputBox";

const Input = styled.input`
  height: 3rem;
  font-size: 0.9rem;
  padding: 0 0.8rem;
  font-weight: 100;
  background: ${props => props.theme.lightBackgroundColor};
  border: 1px solid ${props =>
    props.invalid
    ? props.theme.warningColor
    : props.theme.modalColorVeryLight
  };
  border-radius: ${props => props.theme.borderRadiusSmall};
  outline: none;
  color: ${props => props.theme.modalColorLight};

  &:focus,
  &:active {
    border: ${props => props.theme.inputActiveBorder};
  };
`
Input.displayName = "Input";

export default function InputField ({
  name,
  onChange,
  error,
  label,
}) {
  return (
    <InputBox>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        invalid={Boolean(error)}
        onInput={() => onChange()}
      />
      {error && <Error className="error">{error}</Error>}
    </InputBox>
  )
}
