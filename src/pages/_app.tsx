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
    },
    secondary: {
      main: '#2d3ed4',
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
