import React from "react"
import styled from 'styled-components'
import { useSelect } from "downshift"
import * as map from 'lodash/map'
import { useTheme } from '@material-ui/core/styles'
import Label from 'components/FormPrimitives/FieldLabel/FieldLabel'

const SelectItem = styled.li`
  font-size: .8rem;
  line-height: 2rem;
  box-sizing: border-box;
  padding: 0 1.3rem;
`

const SelectWrapper = styled.div`
  position: relative;
  margin: 0 1rem;
`

const SelectButton = styled.button`
  height: 40px;
  width: 210px;
  padding-left: 1.3rem;
  font-size: 0.85rem;
  border: 1px solid;
  border-radius: ${props =>
    props.isOpen
      ? '20px 20px 0 0'
      : props.theme.borderRadiusBig};

  border-bottom: ${props =>
    props.isOpen
      ? '0'
      : '1px solid'};
  border-color: ${props =>
    props.isOpen
    ? props.theme.addInitiativeButtonBorderColor
    : props.theme.resourceTileLayoutColor};
  color: ${props =>
    props.isOpen
    ? props.theme.addInitiativeButtonBorderColor
    : props.theme.modalColorLight};
  display: flex;
  justify-content: left;
  align-items: center;
`

const SelectMenu = styled.ul`
  position: absolute;
  overflow-y: auto;
  list-style: none;
  max-height: 200px;
  width: auto;
  padding: 0;
  margin: 0;
  border: ${props =>
    props.isOpen
      ? `1px solid ${props.theme.addInitiativeButtonBorderColor}`
      : '0'};
  border-top: 0;
  border-radius: 0 0 20px 20px;
  background: ${props => props.theme.lightBackgroundColor};
  z-index: 1;
  outline: none;
`

const ClearButton = styled.button.attrs(props => ({ 'data-cy': 'clear-location-filter' }))`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  font-size: 1.4rem;
  background: transparent;
  width: 30px;
  height: 30px;
  color: ${props => props.theme.addInitiativeButtonBorderColor}
`

export default function SelectFieldDownshift({
  selectedItem,
  handleSelectedItemChange,
  label,
  items,
  placeholder
}) {
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectItem
  } = useSelect({
    items,
    selectedItem,
    onSelectedItemChange: handleSelectedItemChange,
  })

  const theme = useTheme()

  return (
    <SelectWrapper>
      <Label {...getLabelProps()}>{label}</Label>
      <SelectButton
        {...getToggleButtonProps()}
        isOpen={isOpen}
      >
        {selectedItem?.label || placeholder}
      </SelectButton>
      {selectedItem &&
        (
        <ClearButton
          tabindex={-1}
          onClick={() => {
            selectItem(null)
          }}
          aria-label="wyczyść zaznaczenie"
        >
          &#215;
        </ClearButton>
      )}
      <SelectMenu
        {...getMenuProps()}
        isOpen={isOpen}
      >
        {isOpen &&
          map(items, (item, index) => (
            <SelectItem
              style={
                highlightedIndex === index
                ? {
                  backgroundColor: theme.addInitiativeButtonBorderColor,
                  color: theme.addInitiativeButtonBackgroundColor
                }
                : {}
              }
              key={`${item.id}`}
              {...getItemProps({ item, index })}
            >
              {item.label}
            </SelectItem>
          ))}
      </SelectMenu>
      {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
      <div tabIndex="0" />
    </SelectWrapper>
  )
}
