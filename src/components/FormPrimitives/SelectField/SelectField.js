import React from 'react'
import styled from 'styled-components'
import Label from 'components/FormPrimitives/FieldLabel/FieldLabel'
import dropdown_arrow from 'assets/dropdown_arrow.png'

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
`
InputBox.displayName = "InputBox";

const Select = styled.select`
  height: 3rem;
  font-size: 0.9rem;
  padding: 0 0.8rem;
  font-weight: 100;
  background: ${props => props.theme.lightBackgroundColor};
  border: 1px solid ${props => props.theme.modalColorVeryLight};
  border-radius: ${props => props.theme.borderRadiusSmall};
  outline: none;
  color: ${props => props.theme.modalColorLight};

  &:focus,
  &:active {
    border: ${props => props.theme.inputActiveBorder};
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(${dropdown_arrow}) no-repeat right;
  background-color: ${props => props.theme.lightBackgroundColor};
  background-size: 1.2rem;
  background-position-x: 95%;
  cursor: pointer;
`
Select.displayName = "Select";

export default function SelectField({
  name,
  options,
  label
}) {
  return (
    <InputBox>
      <Label htmlFor={name}>{label}</Label>
      <Select id={name}>
        {options.codes.map(option => {
          return (
            <option key={option} value={option}>
              {options.getText(option)}
            </option>
          )
        })}
      </Select>
    </InputBox>
  )
}
