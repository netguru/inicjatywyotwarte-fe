import React from 'react'
import styled from 'styled-components'
import Label from 'components/FormPrimitives/FieldLabel/FieldLabel'

const Checkbox = styled.div`
  display: flex;
  align-items: center;
`
Checkbox.displayName = 'Checkbox';

const Input = styled.input`
  width: 1rem;
  height: 1rem;
  margin-left: 0;
`
Input.displayName = 'Input';

const LabelCheckbox = styled(Label)`
  margin-right: 2rem;
  height: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 400px) {
    margin-right: 1.4rem;
  }
`
LabelCheckbox.displayName = 'LabelCheckbox';

export default function CheckboxField ({
  name,
  label
}) {
  return (
    <Checkbox>
      <Input type='checkbox' id={name} />
      <LabelCheckbox htmlFor={name}>{label}</LabelCheckbox>
    </Checkbox>
  )
}
