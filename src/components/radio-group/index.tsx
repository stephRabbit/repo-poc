import { Dispatch, SetStateAction } from 'react'

import { FilterTypesOptions } from 'typings'
import {
  RadioContainerStyled,
  RadioDotStyled,
  RadioLabelStyled,
  RadioStyled,
  RadioTitleStyled,
} from './styles'

type OwnProps = {
  filterName: FilterTypesOptions
  filterValue: string
  filterTitle: string
  setFilterName: Dispatch<SetStateAction<FilterTypesOptions>>
}

const RadioGroup: React.FC<OwnProps> = ({
  filterName,
  filterTitle,
  filterValue,
  setFilterName,
}) => {
  return (
    <RadioContainerStyled>
      <RadioLabelStyled>
        <RadioStyled
          hidden
          type='radio'
          value={filterValue}
          checked={filterName === filterValue}
          onChange={e => setFilterName(e.target.value as FilterTypesOptions)}
        />
        <RadioDotStyled />
        <RadioTitleStyled>{filterTitle}</RadioTitleStyled>
      </RadioLabelStyled>
    </RadioContainerStyled>
  )
}

export default RadioGroup
