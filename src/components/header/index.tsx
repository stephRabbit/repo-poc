import React, { Dispatch, SetStateAction, useState, useContext } from 'react'
import axios from 'axios'
import { ThemeContext } from 'styled-components'

import { Repo } from 'typings'
import {
  ButtonStyled,
  FormStyled,
  HeaderContainerStyled,
  HeaderStyled,
  InputStyled,
} from './styles'
import Toggle from 'components/toggle'

type OwnProps = {
  setRepos: Dispatch<SetStateAction<any>>
  setError: Dispatch<SetStateAction<string>>
  toggleTheme(): void
}

const Header: React.FC<OwnProps> = ({ setRepos, setError, toggleTheme }) => {
  const { mode } = useContext(ThemeContext)
  const [searchTerm, setSearchTerm] = useState('')

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSearchTerm('')

    if (searchTerm) {
      try {
        const { data }: { data: Repo[] } = await axios.get(
          `https://api.github.com/orgs/{org}/repos`,
          {
            params: {
              org: searchTerm,
            },
          }
        )
        setError('')
        setRepos(data)
      } catch (err) {
        const { message } = err as { message: string }
        setError(message)
        setRepos(null)
      }
    }
  }

  return (
    <HeaderStyled>
      <HeaderContainerStyled>
        <FormStyled onSubmit={submitForm}>
          <InputStyled
            type='text'
            placeholder='Search Github...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <ButtonStyled type='submit'>Search</ButtonStyled>
        </FormStyled>
        <Toggle isActive={mode === 'dark'} onToggle={toggleTheme} />
      </HeaderContainerStyled>
    </HeaderStyled>
  )
}

export default Header
