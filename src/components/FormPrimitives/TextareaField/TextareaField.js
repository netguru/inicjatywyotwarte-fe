import React from 'react'
import styled from 'styled-components'
import Label from 'components/FormPrimitives/FieldLabel/FieldLabel'
import Error from 'components/FormPrimitives/FieldError/FieldError'

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
`

const Textarea = styled.textarea`
  min-height: 8rem;
  border: 1px solid ${props =>
    props.invalid
    ? props.theme.warningColor
    : props.theme.modalColorVeryLight
  };
  border-radius: ${props => props.theme.borderRadiusSmall};
  font-size: 0.9rem;
  padding: 0.8rem 0.8rem;
  font-weight: 100;
  outline: none;
  resize: vertical;
  color: ${props => props.theme.modalColorLight};
  background: ${props => props.theme.lightBackgroundColor};

  &:focus,
  &:active {
    border: ${props => props.theme.inputActiveBorder};
  }
`

export default function TextareaField ({
  name,
  onChange,
  error,
  label
}) {
  return (
    <InputBox>
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        id={name}
        invalid={Boolean(error)}
        onInput={() => onChange()}
      />
      {error && <Error>{error}</Error>}
    </InputBox>
  )
}
