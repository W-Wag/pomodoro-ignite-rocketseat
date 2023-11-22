import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'

export function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
