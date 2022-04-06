import styled from 'styled-components'

export const StiloBtn = styled.button`
    background:none;
    border: 3px solid red;
    outline: none;

    ${({checked}) => checked && `
        border-color: green;
    `}
`