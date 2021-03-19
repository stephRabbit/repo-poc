import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { filterData } from 'utils'
import { Repo, FilterTypesOptions } from 'typings'
import { GlobalStyles, themeLight, themeDark } from 'styles'
import {
  Card,
  Container,
  ErrorMessageStyled,
  GridContainerStyled,
  Header,
  RadioContainerStyled,
  RadioGroup,
} from 'components'

const App = () => {
  const [theme, setTheme] = useState(themeDark)
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [error, setError] = useState('')
  const [filterName, setFilterName] = useState<FilterTypesOptions>(
    'stargazers_count'
  )

  const toggleTheme = () => {
    setTheme(theme.mode === 'dark' ? themeLight : themeDark)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        setRepos={setRepos}
        setError={setError}
        toggleTheme={toggleTheme}
      />
      <Container>
        {error || repos?.length === 0 ? (
          <ErrorMessageStyled>
            {repos?.length === 0
              ? 'Hmm... this organization has no repos!'
              : 'Organization could not be found!'}
          </ErrorMessageStyled>
        ) : (
          <>
            {repos && repos?.length > 0 && (
              <RadioContainerStyled>
                <RadioGroup
                  filterName={filterName}
                  filterTitle='Z-A'
                  filterValue='full_name'
                  setFilterName={setFilterName}
                />
                <RadioGroup
                  filterName={filterName}
                  filterTitle='Star'
                  filterValue='stargazers_count'
                  setFilterName={setFilterName}
                />
              </RadioContainerStyled>
            )}
            <GridContainerStyled>
              {repos?.sort(filterData(filterName)).map(repo => (
                <Card key={repo.id} repo={repo} />
              ))}
            </GridContainerStyled>
          </>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
