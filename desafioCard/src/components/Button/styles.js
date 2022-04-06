import styled from 'styled-components'

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-weight: 300;
  opacity: 1;
  padding: 4px ;
  transition: .15s opacity ease;

  &:hover {
    opacity: .75;
  }
  &:first-of-type{
    background: white;
    color: #2a2f40;
    margin-right: 1px;
  }

`

