import styled, { css } from 'styled-components'

export const HeaderStyled = styled.header``

export const HeaderContainerStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
`

export const FormStyled = styled.form`
  margin-right: 2rem;
  max-width: 575px;
  width: 100%;
`

export const InputStyled = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.content};
    border: 0;
    border-bottom: 2px solid ${theme.colors.searchColor};
    border-radius: 10px 0 0 10px;
    color: ${theme.colors.textColor};
    font-size: 1rem;
    padding: 1rem;
    width: calc(100% - 85px);
  `}
`

export const ButtonStyled = styled.button`
  ${({ theme }) => css`
    color: var(--white);
    cursor: pointer;
    background-color: ${theme.colors.searchColor};
    border: 3px solid ${theme.colors.searchColor};
    border-radius: 0 10px 10px 0;
    padding: 1rem;
  `}
`
