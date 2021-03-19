import styled from 'styled-components'

export const RadioContainerStyled = styled.div`
  margin-right: 1rem;

  input[type='radio']:checked + span {
    background-color: ${({ theme }) => theme.colors.searchColor};
  }
`

export const RadioLabelStyled = styled.label`
  align-items: center;
  display: flex;
  cursor: pointer;
`

export const RadioStyled = styled.input`
  display: none;
  visibility: hidden;
`

export const RadioDotStyled = styled.span`
  background-color: ${({ theme }) => theme.colors.content};
  border-radius: 50%;
  content: '';
  display: inline-block;
  height: 21px;
  margin-right: 0.5rem;
  width: 21px;
`

export const RadioTitleStyled = styled.span`
  font-weight: 600;
`
