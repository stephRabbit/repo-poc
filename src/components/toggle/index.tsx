import { ToggleWrapperStyled, NotchStyled } from './styles'

type OwnProps = {
  isActive: boolean
  onToggle(): void
}

const Toggle: React.FC<OwnProps> = ({ isActive, onToggle }) => {
  return (
    <ToggleWrapperStyled onClick={onToggle}>
      <NotchStyled isActive={isActive} />
    </ToggleWrapperStyled>
  )
}

export default Toggle
