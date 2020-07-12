import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e7f0c3',
      main: '#a4d4ae',
      dark: '#32afa9',
    },
    secondary: {
      light: '#e7f0c3',
      main: '#f0cf85',
      dark: '#a4d4ae',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
