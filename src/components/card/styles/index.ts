import styled from 'styled-components'

export const CardStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.content};
  border-radius: 10px;
  padding: 1rem;
  border-left: 2px solid ${({ theme }) => theme.colors.accentDark};
`
export const CardHeaderStyled = styled.div`
  margin-bottom: 1rem;
  a {
    font-family: 'Oswald', sans-serif;
  }
`
export const CardContentStyled = styled.div`
  font-size: 0.75rem;
  margin-bottom: 1rem;
  word-break: break-word;

  &:empty {
    display: none;
  }
`
export const CardFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CardStatsStyled = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  span {
    color: ${({ theme }) => theme.colors.searchColor};
  }
`
