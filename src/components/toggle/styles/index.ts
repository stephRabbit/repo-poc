import styled from 'styled-components'

type OwnProps = {
  isActive?: boolean
}

export const ToggleWrapperStyled = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  display: flex;
  background: ${({ theme }) => theme.colors.searchColor};
`

export const NotchStyled = styled.div<OwnProps>`
  height: 21px;
  width: 21px;
  margin-top: 2px;
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${p => (p.isActive ? '26px' : '3px')});
`
