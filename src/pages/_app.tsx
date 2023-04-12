import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import type { AppProps } from 'next/app'

const theme = createTheme({
  typography: {
    fontFamily: 'Epilogue, Public Sans, sans-serif',
  },
  palette: {
    primary: {
      main: 'rgb(15, 98, 254)',
      light: 'rgb(93, 149, 255)',
    },
    secondary: {
      main: '#ACB4BF',
    },
  },
})

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
