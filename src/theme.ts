import deepMerge from 'deepmerge'
import { red } from '@material-ui/core/colors'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
  Theme,
} from '@material-ui/core/styles'

const makeTheme = (variant: ThemeOptions): Theme => {
  const common = {
    palette: {
      common: {
        black: '#222',
        white: '#fff',
      },
      divider: '#222',
      text: { primary: '#222' },
      background: {
        default: '#D4C9C9',
      },
      primary: {
        main: '#542c85',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
    },
    typography: {
      htmlFontSize: 14,
      fontFamily: "'Lato', sans-serif",
    },
  }

  const theme = createMuiTheme(deepMerge(common, variant))
  return responsiveFontSizes(theme)
}

const light: ThemeOptions = {
  palette: {
    type: 'light',
  },
}

const dark: ThemeOptions = {
  palette: {
    type: 'dark',
  },
}

const themes = {
  light: makeTheme(light),
  dark: makeTheme(dark),
}

export default themes
