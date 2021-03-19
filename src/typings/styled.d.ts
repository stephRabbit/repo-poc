import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string
    colors: {
      bg: string
      content: string
      textColor: string
      accent: string
      accentMedium: string
      accentDark: string
      searchColor: string
    }
  }
}
